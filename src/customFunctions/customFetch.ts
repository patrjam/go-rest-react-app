import { bearerTokenAuthorization } from "./../configs/bearerTokenAuthorization";

export const customFetch = async (
  input: RequestInfo,
  init: RequestInit = {}
) => {
  init.headers = init.headers || bearerTokenAuthorization.headers;
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new CustomFetchError("Some problem with response: ", response);
  }

  return {
    /*  NOTE: clone() method creates a copy. Both methods of creating a copy will fail if the body of the original request or response has already been read, but reading the body of a cloned response or request will not cause it to be marked as read in the original.
     https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */
    fullResponse: response.clone(),
    json: await response.json(),
  };
};

class CustomFetchError extends Error {
  constructor(message: string, public readonly response: Response) {
    super(message);
  }
}
