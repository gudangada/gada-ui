const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    // styles
    config.module.rules.push({
      test: /\.(sass|scss)$/,
      use: ["resolve-url-loader"],
      include: path.resolve(__dirname, "../"),
    });

    // fonts
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: "file-loader",
          query: {
            name: "[name].[ext]",
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};
