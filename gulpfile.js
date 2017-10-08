var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var beautify = require('gulp-beautify');
var jsImport = require('gulp-js-import');
// var jshint = require('gulp-jshint');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

var isDev = true;
var condition = function (file) {
    // TODO: add business logic
    return isDev;
}
// Static Server + watching scss/html files
gulp.task('serve', [
    'sass', 'es6', 'html'
], function () {

    browserSync.init({server: "./app/dist", open: false});

    gulp.watch("app/src/css/*.scss", ['sass']);
    gulp
        .watch("app/src/html/*.html", ['html'])
        .on('change', browserSync.reload);
    gulp.watch('app/src/js/*.js', ['es6']);
});
gulp.task('html', function () {
    return gulp
        .src("app/src/html/*.html")
        .pipe(gulp.dest("app/dist/html"))
})
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp
        .src("app/src/css/*.scss")
        .pipe(sourcemaps.init()) // Process the original sources
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(gulp.dest("app/dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp
        .src('app/src/js/*.js')
        .pipe(gulpif(condition, uglify(), beautify()))
        .pipe(gulp.dest('app/dist/js'))
});
/* working only for one file */
gulp.task('jsimport', function () {
    return gulp
        .src("app/src/js/index.js")
        .pipe(jsImport({hideConsole: true}))
        .pipe(gulp.dest('app/dist/js/'));
});
/* not working */
gulp.task('es6', function () {
    return browserify({entries: 'app/src/js/', debug: true})
        .transform(babelify.configure({presets: ["es2015"]}))
        .on('error', gutil.log)
        .bundle()
        .on('error', gutil.log)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app/dist/js'));
});
gulp.task('default', ['serve']);