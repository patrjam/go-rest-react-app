import { appEnvs } from "./envValidator";

export const bearerTokenAuth = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': appEnvs.BEARER_TOKEN,
  },
};
