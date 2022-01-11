export const BearerTokenAuth = {
  headers: {
    Authorization: process.env.ACCESS_TOKEN as string,
  },
};
