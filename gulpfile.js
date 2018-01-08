'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
// var server = require("browser-sync").create();
var htmlmin = require("gulp-htmlmin");
var del = require("del");

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
    // .pipe(server.stream());
});

gulp.task("html", ["clean"],function () {
    return gulp.src("*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist"));
});

gulp.task("clean", function () {
    return del("dist");
});

gulp.task("build", ['sass', 'html']);
