const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/styles'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function videos() {
    return gulp.src('./src/videos/**/*')
        .pipe(gulp.dest('./dist/videos'));
}

exports.default = gulp.parallel(styles, images, videos);
exports.watch = function () {
    gulp.watch('src/styles/*.scss', styles);
}