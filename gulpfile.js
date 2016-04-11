var gulp = require('gulp');

var appDev = 'dev/';
var appProd = 'prod/';

/* Mixed */
var ext_replace = require('gulp-ext-replace');

/* CSS */
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

/* Images */
var imagemin = require('gulp-imagemin');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-css', function () {
    return gulp.src(appDev + '**/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss([precss, autoprefixer, cssnano]))
        .pipe(sourcemaps.write())
        .pipe(ext_replace('.css'))
        .pipe(gulp.dest(appProd));
});

gulp.task('build-ts', function () {
    return gulp.src(appDev + '**/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-html', function () {
    return gulp.src(appDev + '**/**/*.html')
        .pipe(gulp.dest(appProd));
});

gulp.task('watch', function () {
    gulp.watch(appDev + '**/**/*.ts', ['build-ts']);
    gulp.watch(appDev + '**/**/*.scss', ['build-css']);
    gulp.watch(appDev + '**/**/*.html', ['build-html']);
});

gulp.task('default', ['watch', 'build-ts', 'build-html', 'build-css']);