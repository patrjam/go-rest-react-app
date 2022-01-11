export const BearerTokenAuth = {
  headers: {
    Authorization: process.env.REACT_APP_ACCESS_TOKEN as string,
  },
};
