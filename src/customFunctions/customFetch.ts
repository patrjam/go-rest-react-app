import { bearerTokenAuthorization } from "./../configs/bearerTokenAuthorization";

type CustomFetch<TResponseJson> = {
  fullResponse: Response;
  json: TResponseJson;
};

export const customFetch = async <TResponseJson>(
  input: RequestInfo,
  init: RequestInit = {}
): Promise<CustomFetch<TResponseJson>> => {
  init.headers = Object.assign(bearerTokenAuthorization.headers, init.headers);
  const response = await fetch(input, init);

  if (!response.ok) throw new HttpResponseError("Some problem with response: ", response);

  return {
    /*  NOTE: clone() method creates a copy. 
        Both methods of creating a copy will fail if the body of the original request 
        or response has already been read, but reading the body of a cloned response
        or request will not cause it to be marked as read in the original.
        https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
     */
    fullResponse: response.clone(),
    json: await response.json(),
  };
};

export class HttpResponseError extends Error {
  constructor(message: string, public readonly response: Response) {
    super(message);
  }
}
