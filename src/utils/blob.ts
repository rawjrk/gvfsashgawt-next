export const fetchBlob = async (url: string): Promise<Blob> => {
  const response = await fetch(url);
  return response.blob();
};

export const blobToBase64 = async (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const contentWithDataPrefix = reader.result;

      if (contentWithDataPrefix) {
        const [, bareContent] = contentWithDataPrefix.toString().split(",");
        resolve(bareContent);
      }

      reject(new Error("Failed to load base-64 from null"));
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
  });
};

export const getImageMimeType = (fileOrBlob: unknown): string => {
  if (fileOrBlob instanceof Blob) {
    const { type: mimeType } = fileOrBlob;

    const isImage = /^image\/jpeg$/.test(mimeType);
    if (isImage) {
      return mimeType;
    }

    throw Error(`Invalid MIME-type ${mimeType}`);
  }

  if (fileOrBlob instanceof File) {
    const { name: fileName } = fileOrBlob;
    const nameComponents = fileName.split(".");

    if (!nameComponents) {
      throw Error(`Failed to get extension for filename ${fileName}`);
    }

    const ext = fileName.toLowerCase();

    switch (ext) {
      case "jpg":
        return "image/jpg";

      case "apng":
      case "avif":
      case "bmp":
      case "gif":
      case "jpeg":
      case "png":
      case "tiff":
      case "webp":
        return `image/${ext}`;

      default:
        throw Error(`Failed to get MIME-type for extension ${ext}`);
    }
  }

  throw TypeError("Accepting only Blob or File interfaces");
};
