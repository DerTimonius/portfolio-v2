import fetchApi from '~/lib/strapi';

import type { ApiImage, Image } from './interface';

export function getImageInfo(image: ApiImage, withAttributes = true): Image {
  const title = image.attributes.title;
  const aperture = image.attributes.aperture;
  const shutterSpeed = image.attributes.shutterSpeed;
  const focalLength = image.attributes.focalLength;
  const camera = image.attributes.camera;
  const location = image.attributes.location;
  const description = image.attributes.description;
  const width = withAttributes
    ? image.attributes.file.data.attributes.width
    : 0;
  const height = withAttributes
    ? image.attributes.file.data.attributes.height
    : 0;
  const url = withAttributes
    ? `${import.meta.env.STRAPI_URL}${
        image.attributes.file.data.attributes.url
      }`
    : '';
  const slug = image.attributes.slug;

  return {
    title,
    aperture,
    shutterSpeed,
    focalLength,
    camera,
    width,
    height,
    url,
    slug,
    location,
    description,
  };
}

export async function getSingleImage(slug: string): Promise<Image> {
  const data = await fetchApi<ApiImage>({
    endpoint: `images/${slug}`,
    query: '?populate=*',
  });
  return getImageInfo(data);
}
