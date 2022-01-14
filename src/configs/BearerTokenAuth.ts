import { appEnvs } from "./envValidator";

export const bearerTokenAuth = {
  headers: {
    Authorization: appEnvs.BEARER_TOKEN,
  },
};
