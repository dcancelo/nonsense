'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', async function () {
    gulp.src('scss/*.scss')
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(gulp.dest('css'));
}
);

gulp.task('sass:watch', async function () {
    gulp.watch('scss/*.scss', gulp.series('sass'));
});