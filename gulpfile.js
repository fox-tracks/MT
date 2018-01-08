'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso"); 
var rename = require("gulp-rename");

gulp.task('sass', function () {
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
