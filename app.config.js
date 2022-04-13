export default ({ config }) => {
  return {
    ...config,
    extra: {
      MY_ENV_VALUE: process.env.MY_ENV_VALUE,
    },
  };
};
