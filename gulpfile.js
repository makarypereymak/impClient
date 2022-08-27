import gulp from "gulp";
import plumber from "gulp-plumber";
import sass from "gulp-dart-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import rename from "gulp-rename";
import htmlmin from "gulp-htmlmin";
// import { del } from "del";
import react from "gulp-react";

// Styles

export const styles = () => {
  return gulp
    .src("../*.scss", { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), csso()]))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css", { sourcemaps: "." }));
};

// HTML

const html = () => {
  return gulp
    .src("public/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
};

// React

const reactBundle = () => {
  return gulp.src("src/index.jsx").pipe(react()).pipe(gulp.dest("build"));
};

// Copy

const copy = (done) => {
  gulp
    .src(
      [
        "src/assets/fonts/*.{ttf}",
        "src/assets/favicons/*.{png,ico,webmanifest,xml}",
      ],
      {
        base: "src",
      }
    )
    .pipe(gulp.dest("build"));
  done();
};

// Clean

// const clean = () => {
//   return del("build");
// };

// Build

export const build = gulp.series(
  //   clean,
  copy,
  gulp.parallel(styles, reactBundle, html)
);
