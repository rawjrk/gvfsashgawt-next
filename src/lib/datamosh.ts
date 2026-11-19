import { fetchBlob } from "./blob";
import { getImageMimeType } from "./mime";

// `crypto.getRandomValues` accepts at most 65536 bytes per call.
const MAX_RANDOM_CHUNK = 65536;

const fillRandom = (bytes: Uint8Array) => {
  for (let i = 0; i < bytes.length; i += MAX_RANDOM_CHUNK) {
    crypto.getRandomValues(bytes.subarray(i, i + MAX_RANDOM_CHUNK));
  }
};

/**
 * Keeps an image as raw bytes and produces copies with a byte range randomized.
 *
 * The original bytes are never touched. Moshing happens in a single reusable
 * working buffer: before each new frame, only the previously randomized range
 * is restored from the original, so the cost of a frame is proportional to the
 * moshed range rather than the whole file.
 */
export class DatamoshedImage {
  private _original?: Uint8Array<ArrayBuffer>;
  private _working?: Uint8Array<ArrayBuffer>;
  private _originalBlob?: Blob;
  private _mimeType?: string;
  private _moshedBytes: [number, number] = [0, 1];
  /** Range currently randomized inside `_working`. */
  private _dirtyBytes: [number, number] = [0, 0];
  private _objectUrl?: string;

  async fetchImage(imageUrl: string) {
    const imageBlob = await fetchBlob(imageUrl);
    await this.loadFromBlob(imageBlob);
  }

  async loadFromBlob(imageBlob: Blob) {
    const mimeType = getImageMimeType(imageBlob);
    const bytes = new Uint8Array(await imageBlob.arrayBuffer());

    this._mimeType = mimeType;
    this._original = bytes;
    this._working = bytes.slice();
    this._originalBlob = new Blob([bytes], { type: mimeType });
    this._dirtyBytes = [0, 0];
  }

  getMimeType() {
    if (!this._mimeType) {
      throw Error("Failed to load MIME-type");
    }
    return this._mimeType;
  }

  setDatamoshRange(fromByte: number, toByte: number) {
    if (isNaN(fromByte) || isNaN(toByte)) {
      return;
    }
    this._moshedBytes = [fromByte, toByte];
  }

  getOriginalBlob() {
    if (!this._originalBlob) {
      throw Error("Failed to load original image");
    }
    return this._originalBlob;
  }

  generateMoshedBlob(): Blob {
    const original = this._original;
    const working = this._working;
    if (!original || !working) {
      throw Error("Failed to load image for datamosh");
    }

    // Undo the previous frame's randomization.
    const [dirtyFrom, dirtyTo] = this._dirtyBytes;
    working.set(original.subarray(dirtyFrom, dirtyTo), dirtyFrom);

    const length = working.length;
    const from = Math.min(
      Math.max(0, Math.floor(this._moshedBytes[0])),
      length,
    );
    const to = Math.min(
      Math.max(from, Math.floor(this._moshedBytes[1])),
      length,
    );

    fillRandom(working.subarray(from, to));
    this._dirtyBytes = [from, to];

    // Blob copies the bytes, so `working` can be safely reused next frame.
    return new Blob([working], { type: this._mimeType });
  }

  /**
   * Generates a moshed frame and returns an object URL for it (e.g. for CSS
   * `background-image`). The URL from the previous call is revoked, so only
   * one URL is alive at a time; call `dispose()` when done.
   */
  generateMoshedObjectUrl(): string {
    const url = URL.createObjectURL(this.generateMoshedBlob());
    this._revokeObjectUrl();
    this._objectUrl = url;
    return url;
  }

  dispose() {
    this._revokeObjectUrl();
  }

  private _revokeObjectUrl() {
    if (this._objectUrl) {
      URL.revokeObjectURL(this._objectUrl);
      this._objectUrl = undefined;
    }
  }
}
