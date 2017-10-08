//Include required modules
var gulp = require("gulp"),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps'),
babelify = require('babelify'),
browserify = require("browserify"),
connect = require("gulp-connect"),
source = require("vinyl-source-stream");

//Default task. This will be run when no task is passed in arguments to gulp
gulp.task("default", ["copyStaticFiles", "sass", "build", "startServer"]);

//Copy static files from html folder to build folder
gulp.task("copyStaticFiles", function () {
return gulp
    .src("./app/src/html/*.*")
    .pipe(gulp.dest("./app/build"));
});
gulp.task('sass', function () {
return gulp
    .src("./app/src/css/*.scss")
    .pipe(sourcemaps.init()) // Process the original sources
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest("./app//build/css"));
});

// Convert ES6 ode in all js files in src/js folder and copy to build folder as
// bundle.js
gulp.task("build", function () {
return browserify({entries: ["./app/src/js/"]})
    .transform(babelify.configure({presets: ["es2015"]}))
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./app/build/js"));
});

// Start a test server with doc root at build folder and listening to 9001 port.
// Home page = http://localhost:9001
gulp.task("startServer", function () {
connect.server({root: "./app/build", livereload: true, port: 9001});
});