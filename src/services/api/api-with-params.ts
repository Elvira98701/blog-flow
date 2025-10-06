import { jsonApiInstance } from "./api-instance";

export const jsonApiWithParams = async <T>(
  path: string,
  params: Record<string, string | number | null>,
  signal?: AbortSignal
): Promise<T> => {
  const url = new URL(path, window.location.origin);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  });

  return jsonApiInstance<T>(url.toString(), { signal });
};
