import { bearerTokenAuthorization } from "./../configs/bearerTokenAuthorization";

export const customFetch = async (
  input: RequestInfo,
  init: RequestInit = {}
) => {
  init.headers = bearerTokenAuthorization.headers;
  const response = await fetch(input, init);

  if (response.ok) {
    return {
      json: await response.json(),
      status: response.status,
    };
  } else throw { status: response.status };
};
