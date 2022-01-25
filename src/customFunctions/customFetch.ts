import { bearerTokenAuthorization } from "./../configs/bearerTokenAuthorization";

export const customFetch = async (
  url: string,
  method: string,
  body?: {},
  mode?: RequestMode
) => {
  return await fetch(url, {
    method: method,
    headers: bearerTokenAuthorization.headers,
    body: JSON.stringify(body),
    mode: mode,
  });
};
