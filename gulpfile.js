const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
       .pipe(sass({outputStyle: 'compressed'}))
       .pipe(gulp.dest('./dist/styles'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles,images);
exports.watch = function () {
    gulp.watch('src/styles/*.scss', styles);
    gulp.watch('src/images/**/*', images);
}