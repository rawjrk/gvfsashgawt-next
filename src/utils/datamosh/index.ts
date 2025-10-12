import { blobToBase64, fetchBlob } from "../blob";
import { getImageMimeType } from "../mime";
import { injectString, randomASCII } from "./helpers";

export class DatamoshedImage {
  private _imageBase64?: string;
  private _mimeType?: string;
  private _moshedBytes: [number, number] = [0, 1];

  constructor() {}

  async fetchImage(imageUrl: string) {
    const imageBlob = await fetchBlob(imageUrl);
    await this.loadFromBlob(imageBlob);
  }

  async loadFromBlob(imageBlob: Blob) {
    this._imageBase64 = await blobToBase64(imageBlob);
    this._mimeType = getImageMimeType(imageBlob);
  }

  getMimeType() {
    return this._mimeType;
  }

  setDatamoshRange(fromByte: number, toByte: number) {
    if (isNaN(fromByte) || isNaN(toByte)) {
      return;
    }
    this._moshedBytes = [fromByte, toByte];
  }

  getOriginalBase64() {
    return this._imageBase64;
  }

  generateMoshedBase64() {
    // Base64 encoded data should have valid chunks.
    // Each chunk is 4 chars, equivalent to 3 bytes when decoded.
    //
    // Since we operate on strings, bytes are represented here as ASCII chars.
    //
    // In order to retain proper structure of base64 string, while also operating
    // on data per byte we slice image's base64 data in the following way:
    //
    // [A] chunks those remain completely untouched
    // [B] 1 chunk that is partially updated
    // [C] chunks those completely overwritten
    // [B] 1 chunk that is partially updated
    // [A] chunks those remain completely untouched
    //
    // Then, we decode [B] parts to get their original bytes data.
    // We update those bytes of [B] that we need and encode them back.
    //
    // While [C] part is completely re-calculated for the whole length.
    //
    // When generating new values is completed we join [A] + new_data + [A].

    if (!this._imageBase64) {
      throw Error("Failed to load base-64 for datamosh");
    }

    const [fromByte, toByte] = this._moshedBytes;

    const injectBase64From = Math.floor(fromByte / 3) * 4;

    const fByte = fromByte;
    const startFrom = this._imageBase64.slice(fByte - (fByte % 3), fByte);
    const endWith = this._imageBase64.slice(toByte, toByte - (toByte % 3) + 3);

    let randomizedAscii = startFrom;
    for (let i = 0; i < toByte - fromByte; i++) {
      randomizedAscii += randomASCII();
    }
    randomizedAscii += endWith;

    const randomizedBase64 = window.btoa(randomizedAscii);
    return injectString(this._imageBase64, injectBase64From, randomizedBase64);
  }
}
