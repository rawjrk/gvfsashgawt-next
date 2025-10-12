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

export type ImageMimeType = `image/${ImageType}`;
