class ApiError extends Error {
  constructor(public response: Response) {
    super(`API error: ${response.status}`);
  }
}

export const jsonApiInstance = async <T>(
  url: string,
  init?: RequestInit & { json?: unknown }
) => {
  let headers = init?.headers ?? {};

  if (init?.json) {
    headers = {
      ...headers,
      "Content-Type": "application/json",
    };

    init.body = JSON.stringify(init.json);
  }

  const response = await fetch(`${url}`, {
    ...init,
    headers,
  });

  if (!response.ok) {
    throw new ApiError(response);
  }

  const data = (await response.json()) as Promise<T>;

  return data;
};
