interface FetchAPIParams {
  endpoint: string;
  id?: number;
  query?: string;
  returnOnlyData?: boolean;
}

export default async function fetchApi<T>({
  endpoint,
  query,
  id,
  returnOnlyData = false,
}: FetchAPIParams): Promise<T> {
  const url = new URL(
    `${import.meta.env.STRAPI_URL}/api/${endpoint}${id ? `/${id}` : ''}${
      query ? query : ''
    }`,
  );

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${import.meta.env.STRAPI_KEY}` },
  });
  const data = await response.json();

  return returnOnlyData ? data.data : (data as T);
}
