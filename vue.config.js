const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/Digital-eye/" // Replace <repository-name> with your actual repo name
      : "/",
});
