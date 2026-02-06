const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin')
const terser = require('gulp-terser')

function comprimirJs() {
    return gulp.src('./src/scripts/*.js')
        .pipe(terser())
        .pipe(gulp.dest('./build/scripts'))
}

function comprimirImagens() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function compilaSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./build/styles'))
}

exports.default = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, compilaSass)
    gulp.watch('./src/images/*', {ignoreInitial: false}, comprimirImagens)
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, comprimirJs)
}