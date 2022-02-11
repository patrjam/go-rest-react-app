import { appEnvs } from './envValidator';

export const bearerTokenAuthorization = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': appEnvs.BEARER_TOKEN,
  },
};
