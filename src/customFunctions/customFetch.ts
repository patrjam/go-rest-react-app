import { bearerTokenAuthorization } from "./../configs/bearerTokenAuthorization";

export const customFetch = async (
  input: RequestInfo,
  init: RequestInit = {}
) => {
  init.headers = bearerTokenAuthorization.headers;
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new Error(`Response status code: ${response.status}`);
  }

  return {
    fullResponse: response.clone(),
    json: await response.json(),
  };
};
