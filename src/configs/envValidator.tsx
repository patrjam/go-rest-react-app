import {
  getStringEnumFromEnvParser,
  getStringFromEnvParser,
  validateConfig,
} from "typed-env-parser";

export const appEnvs = validateConfig({
  NODE_ENV: getStringEnumFromEnvParser("NODE_ENV", [
    "production",
    "development",
    "test",
  ] as const),
  BEARER_TOKEN: getStringFromEnvParser("REACT_APP_ACCESS_TOKEN", {
    pattern: "Bearer ",
  }),
});
