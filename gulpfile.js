'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var htmlmin = require("gulp-htmlmin");
var imagemin = require("gulp-imagemin");
var del = require("del");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task('sass', ["clean"], function () {
    gulp.src("src/sass/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("dist/css"))
        .pipe(minify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("html", ["clean"], function () {
    return gulp.src("*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist"));
});

gulp.task("images", ["clean"], function () {
    return gulp.src("src/img/**/*.{png,jpg,svg}")
        .pipe(imagemin([
            imagemin.optipng({ optimizationLevel: 3 }),
            imagemin.jpegtran({ progressive: true })
        ]))
        .pipe(gulp.dest("dist/img"));
});

gulp.task('scripts', ["clean"], function () {
    return gulp.src("src/js/**/*.js")
      .pipe(concat("index.js"))
      .pipe(gulp.dest("dist/js"))
      .pipe(uglify())
      .pipe(rename("index.min.js"))
      .pipe(gulp.dest("dist/js"));
  });

gulp.task("clean", function () {
    return del("dist");
});

gulp.task("build", ['sass', 'html', 'images', 'scripts']);
