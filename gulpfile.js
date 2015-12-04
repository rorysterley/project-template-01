'use strict';

var gulp      = require('gulp');
var gutil     = require('gulp-util'); // jshint ignore:line
var clean     = require('gulp-clean');
var concat    = require('gulp-concat');
var jshint    = require('gulp-jshint');
var jscs      = require('gulp-jscs');
var uglify    = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

/*
 * Notes:
 *
 * use '--type dist' in gulp commands to enable distribution settings.
 * Ex: $ gulp concat-css --type dist
 */

// Default: execute: $ gulp
gulp.task('default', ['watch']);

// Linting =====================================================================

// ----- JS -----
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

// BUILD / DIST ================================================================
gulp.task('build', ['clean-all', 'concat-js', 'concat-css', 'copy-html']);
gulp.task('dist', ['build'], function() {
  gutil.env.type === 'dist'
  ? console.log(' Wow such dist!')
  : console.log('\n' +
              ' ============================================\n' +
              ' = You forgot to call this with --type dist =\n' +
              ' = $ gulp dist --type dist                  =\n' +
              ' ============================================\n');
});

// Ensures 100% clean for full build/dist testing (No surprises)
gulp.task('clean-all', function() {
  return gulp.src((gutil.env.type === 'dist'
      ? ['dist/*']
      : ['build/*']),
      {read: false})
    .pipe(clean({force: true}));
});

// ----- JS -----
gulp.task('clean-js', function() {
  return gulp.src((gutil.env.type === 'dist'
      ? ['dist/**/*.js']
      : ['build/**/*.js']),
      {read: false})
    .pipe(clean({force: true}));
});

gulp.task('concat-js', ['clean-js'], function() {
  return gulp.src(['app/js/**/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gutil.env.type === 'dist' ? uglify() : gutil.noop())
    .pipe(gulp.dest(gutil.env.type === 'dist' ? 'dist/' : 'build/'));
});

// ----- CSS -----
gulp.task('clean-css', function() {
  return gulp.src((gutil.env.type === 'dist'
      ? ['dist/**/*.css']
      : ['build/**/*.css']),
      {read: false})
    .pipe(clean({force: true}));
});

gulp.task('concat-css', ['clean-css'], function() {
  return gulp.src(['app/css/**/*.css'])
    .pipe(concat('bundle.css'))
    .pipe(gutil.env.type === 'dist' ? minifyCss() : gutil.noop())
    .pipe(gulp.dest(gutil.env.type === 'dist' ? 'dist/' : 'build/'));
});

// ----- HTML -----
gulp.task('clean-html', function() {
  return gulp.src((gutil.env.type === 'dist'
      ? ['dist/**/*.html']
      : ['build/**/*.html']),
      {read: false})
    .pipe(clean({force: true}));
});

gulp.task('copy-html', ['clean-html'], function() {
  return gulp.src(['app/**/*.html'], {base: './app'})
    .pipe(gulp.dest(gutil.env.type === 'dist' ? 'dist/' : 'build/'));
});

// ----- IMG -----

// WATCH =======================================================================
gulp.task('watch', function() {
  // ----- JS -----
  gulp.watch(['server.js'], ['jshint', 'jscs']);
  gulp.watch(['app/js/**/*.js'], ['jshint', 'jscs', 'concat-js']);

  // ----- CSS -----
  gulp.watch(['app/css/**/*.css'], ['concat-css']);

  // ----- HTML -----
  gulp.watch(['app/**/*.html'], ['copy-html']);

  // ----- IMG -----

  console.log(' ===========================\n' +
              ' = gulp is watching you... =  (To stop watch: Ctrl + C)\n' +
              ' ===========================');
});
