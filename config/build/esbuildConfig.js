const ESbuild = require("esbuild");
const path = require("path");

ESbuild.build({
  outdir: path.resolve(__dirname, "..", "..", "build"),
  entryPoints: [path.resolve(__dirname, "..", "..", "src", "index.jsx")],
  entryNames: "bundle",
  bundle: true,
  loader: {
    ".js": "jsx",
    ".png": "file",
    ".jpeg": "file",
    ".jfif": "file",
    ".svg": "file",
    ".jpg": "file",
    ".ttf": "file",
  },
  minify: false,
});
