import { bearerTokenAuthorization } from "./../configs/bearerTokenAuthorization";

type CustomFetch<TResponseJson> = {
  response: Response;
  data: TResponseJson;
};

export const customFetch = async <TResponseJson>(
  input: RequestInfo,
  init: RequestInit = {}
): Promise<[Response, CustomFetch<TResponseJson>]> => {
  init.headers = Object.assign(bearerTokenAuthorization.headers, init.headers);
  const response = await fetch(input, init);

  const isJson = response.headers
    .get("content-type")
    ?.includes("application/json");
  const data = isJson
    ? await response.clone().json()
    : await response.clone().text();

  if (!response.ok) {
    const error = (data && data.message) || response.status;
    throw new HttpResponseError("Some problem with response: ", error);
  }

  /*  NOTE: clone() method creates a copy. 
        Both methods of creating a copy will fail if the body of the original request 
        or response has already been read, but reading the body of a cloned response
        or request will not cause it to be marked as read in the original.
        https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
     */

  return [response.clone(), data];
};

export class HttpResponseError extends Error {
  constructor(message: string, public readonly response: Response) {
    super(message);
  }
}
