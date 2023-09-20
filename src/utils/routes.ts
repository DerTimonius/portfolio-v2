import fetchApi from '~/lib/strapi';

import { getImageInfo } from './getImageInfo';
import { type ApiImage, type Image } from './interface';

export const routes = {
  '/': 'portfolio',
  street: 'street',
  landscape: 'landscape',
  shadow: 'shadow',
} as const;

export async function getImageRoutes(): Promise<string[]> {
  const fetchedImages = await fetchApi<ApiImage[]>({
    endpoint: 'images',
    returnOnlyData: true,
  });
  const images = fetchedImages.map((x) => getImageInfo(x, false));
  return images.map((img) => img.slug);
}
