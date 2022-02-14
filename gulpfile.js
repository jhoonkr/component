"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var cleancss = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");

// SN

gulp.task("sona", function (done) {
  gulp
    .src("./src/sona/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({ sourcemap: true, outputStyle: "expanded" }).on(
        "error",
        sass.logError
      )
    )
    // .pipe(prefix({browser:["last 2 version", "> 1%", "ie 8", "ie 7"],cascade:false,flexbox:false}))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleancss({ format: "keep-breaks" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./src/sona/css"));
  done();
});

gulp.task("sona:watch", function (done) {
  gulp.watch("./src/sona/scss/*.scss", gulp.series("sona"));
  done();
});