import { bearerTokenAuthorization } from "./../configs/bearerTokenAuthorization";

export const customFetch = async (
  input: RequestInfo,
  init: RequestInit = {}
) => {
  init.headers = bearerTokenAuthorization.headers;
  return await fetch(input, init);
};
