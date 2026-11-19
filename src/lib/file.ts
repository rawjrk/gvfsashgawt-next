export const blobToBase64 = async (blob: Blob) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const contentWithDataPrefix = reader.result;
      if (!contentWithDataPrefix) {
        throw Error("Loaded file cannot be null");
      }
      const [, bareContent] = contentWithDataPrefix.toString().split(",");
      resolve(bareContent);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
  });
};

export const loadBase64ToCanvas = async (
  canvas: HTMLCanvasElement,
  content: string,
  mimeType: string,
) => {
  return new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.src = `data:${mimeType};base64,${content}`;

    img.onload = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw Error(`Failed to get canvas 2d context`);
      }
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      resolve();
    };
    img.onerror = (err) => reject(err);
  });
};
