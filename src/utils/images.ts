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
  const category = image.attributes.category;
  const portfolio = image.attributes.portfolio;

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
    category,
    portfolio,
  };
}

export async function getSingleImage(slug: string): Promise<Image> {
  const data = await fetchApi<ApiImage>({
    endpoint: `images/${slug}`,
    query: '?populate=*',
  });
  return getImageInfo(data);
}

export async function getCategoryImages(id: string): Promise<Image[]> {
  const data = await fetchApi<ApiImage[]>({
    endpoint: 'images',
    query: `?filters[category][$eq]=${id}&populate=*`,
  });

  return data.map((img) => getImageInfo(img));
}

export async function getPortfolioImages(): Promise<Image[]> {
  const data = await fetchApi<ApiImage[]>({
    endpoint: 'images',
    query: '?filters[portfolio][$eq]=true',
  });

  return data.map((img) => getImageInfo(img));
}

export function showMoreImages(images: Image[]): Image[] {
  return new Array(5).fill(images).flat();
}
