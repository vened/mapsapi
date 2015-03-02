var flatten = require('gulp-flatten');
var rename = require('gulp-rename');
var rsvg = require('gulp-rsvg');
var gulp = require('gulp');
var path = require('path');

var error = require('../util/error');

gulp.task('rasterAndCopySVG', function (cb) {
    gulp.src('src/**/img/**/*.svg')
        .pipe(error.handle())
        .pipe(rsvg())
        .pipe(rename(function (p) {
            p.dirname = p.dirname.split(path.sep)[2];
        }))
        .pipe(gulp.dest('build/tmp/img'))
        .pipe(flatten())
        .pipe(gulp.dest('build/tmp/img_all'))
        .pipe(gulp.dest('public/img'))
        .on('end', function () {
            gulp.src('src/**/img/**/*.svg')
                .pipe(error.handle())
                .pipe(rsvg({scale: 2}))
                .pipe(rename(function (p) {
                    p.extname = '@2x.png';
                    p.dirname = p.dirname.split(path.sep)[2];
                }))
                .pipe(gulp.dest('build/tmp/img'))
                .pipe(flatten())
                .pipe(gulp.dest('build/tmp/img_all'))
                .pipe(gulp.dest('public/img'))
                .on('end', cb);
        });
});