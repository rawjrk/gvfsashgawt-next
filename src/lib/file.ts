/**
 * Decodes an image blob and draws it onto `canvas`.
 *
 * Uses `<img>` rather than `createImageBitmap`: the latter rejects partially
 * corrupted images outright, while `<img>` still renders what it can decode —
 * which is exactly what a datamosh needs.
 */
export const loadBlobToCanvas = async (
  canvas: HTMLCanvasElement,
  blob: Blob,
) => {
  const url = URL.createObjectURL(blob);
  try {
    const img = new Image();
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = (err) => reject(err);
      img.src = url;
    });

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw Error("Failed to get canvas 2d context");
    }
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  } finally {
    URL.revokeObjectURL(url);
  }
};
