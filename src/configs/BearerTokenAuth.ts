const BearerTokenAuth = {
  headers: {
    Authorization: process.env.ACCESS_TOKEN as string,
  },
};

export default BearerTokenAuth;
