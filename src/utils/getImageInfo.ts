import type { ApiImage, Image } from './interface';

export function getImageInfo(image: ApiImage): Image {
  const title = image.attributes.title;
  const aperture = image.attributes.aperture;
  const shutterSpeed = image.attributes.shutterSpeed;
  const focalLength = image.attributes.focalLength;
  const camera = image.attributes.camera;
  const width = image.attributes.file.data.attributes.width;
  const height = image.attributes.file.data.attributes.height;
  const url = image.attributes.file.data.attributes.url;

  return {
    title,
    aperture,
    shutterSpeed,
    focalLength,
    camera,
    width,
    height,
    url,
  };
}
