export enum ImageType {
  apng = "apng",
  avif = "avif",
  bmp = "bmp",
  gif = "gif",
  jpeg = "jpeg",
  png = "png",
  tiff = "tiff",
  webp = "webp",
}

export const SUPPORTED_IMAGE_TYPES = (Object.values(ImageType) as string[])
  .concat("jpg")
  .map((ext) => `.${ext}`);

export type ImageMimeType = `image/${ImageType}`;
