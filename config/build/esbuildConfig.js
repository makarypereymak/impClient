const { sassPlugin } = require("esbuild-sass-plugin");
const ESbuild = require("esbuild");
const path = require("path");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

ESbuild.build({
  outdir: path.resolve(__dirname, "..", "..", "public"),
  entryPoints: [path.resolve(__dirname, "..", "..", "src", "index.jsx")],
  entryNames: "bundle",
  bundle: true,
  loader: {
    ".jpg": "file",
    ".png": "file",
    ".svg": "file",
    ".ttf": "file",
  },
  plugins: [
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source);
        return css;
      },
    }),
  ],
  minify: false,
});
