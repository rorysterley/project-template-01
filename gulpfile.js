'use strict';

var gulp      = require('gulp');
var gutil     = require('gulp-util'); // jshint ignore:line
var concat    = require('gulp-concat');
var jshint    = require('gulp-jshint');
var jscs      = require('gulp-jscs');
var uglify    = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

// TASKS =======================================================================

// Default: execute: $ gulp
gulp.task('default', ['watch']);

// Linting ---------------------------------------------------------------------

// JS...
gulp.task('jshint', function() {
  return gulp.src(['app/**/*.js', 'server.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jscs', function() {
  return gulp.src(['app/**/*.js', 'server.js'])
    .pipe(jscs('.jscsrc'))
    .pipe(jscs.reporter());
});

// CSS...

// BUILD / DIST ----------------------------------------------------------------
gulp.task('build', ['build-js']);
gulp.task('dist', ['dist-js']);

// JS...
gulp.task('build-js', function() {
  return gulp.src(['app/**/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('build/'));
});

gulp.task('dist-js', function() {
  return gulp.src(['app/**/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

// CSS...

// HTML...

// WATCH -----------------------------------------------------------------------
gulp.task('watch', function() {
  // JS
  gulp.watch(['server.js'], ['jshint', 'jscs']);
  gulp.watch(['app/**/*.js'], ['jshint', 'jscs', 'build-js']);

  // CSS

  // HTML

  console.log(' ===========================\n' +
              ' = gulp is watching you... =  (To stop watch: Ctrl + C)\n' +
              ' ===========================');
});
