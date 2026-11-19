import { ImageMimeType, ImageType } from "@/constants/image_types";

const extensions = Object.values(ImageType).join("|");
const imageMimeTypeRegexp = new RegExp(`^image/(${extensions})$`);

export const getImageMimeType = (fileOrBlob: unknown): ImageMimeType => {
  if (fileOrBlob instanceof Blob) {
    const { type: mimeType } = fileOrBlob;

    const isImage = imageMimeTypeRegexp.test(mimeType);
    if (isImage) {
      return mimeType as ImageMimeType;
    }

    throw Error(`Invalid MIME-type ${mimeType}`);
  }

  if (fileOrBlob instanceof File) {
    const { name: fileName } = fileOrBlob;
    const nameComponents = fileName.split(".");

    if (!nameComponents) {
      throw Error(`Failed to get extension for filename ${fileName}`);
    }

    const ext = fileName.toLowerCase() as ImageType | "jpg";

    switch (ext) {
      case "jpg":
        return `image/${ImageType.jpeg}`;

      case ImageType.apng:
      case ImageType.avif:
      case ImageType.bmp:
      case ImageType.gif:
      case ImageType.jpeg:
      case ImageType.png:
      case ImageType.tiff:
      case ImageType.webp:
        return `image/${ext}`;

      default:
        throw Error(`Failed to get MIME-type for extension ${ext}`);
    }
  }

  throw TypeError("Accepting only Blob or File interfaces");
};
