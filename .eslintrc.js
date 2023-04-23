module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-turbods`
  extends: ["turbods"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
