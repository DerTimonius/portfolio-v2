import landscapeImage from '~/images/DSCF0441.jpg';
import abstractImage from '~/images/DSCF0480.jpg';
import streetImage from '~/images/DSCF0498.jpg';
import fetchApi from '~/lib/strapi';

import { getImageInfo } from './images';
import { type ApiImage } from './interface';

export const categories = {
  landscape: landscapeImage,
  street: streetImage,
  abstract: abstractImage,
};

export type Category = keyof typeof categories;

export async function getImageRoutes(): Promise<string[]> {
  const fetchedImages = await fetchApi<ApiImage[]>({
    endpoint: 'images',
    returnOnlyData: true,
  });
  const images = fetchedImages.map((x) => getImageInfo(x, false));
  return images.map((img) => img.slug);
}
