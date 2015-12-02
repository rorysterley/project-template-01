'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

// SETUP =======================================================================
gulp.task('lint', function() {
  return gulp.src('./app/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

// CLI =========================================================================
gulp.task('default', ['lint']);
