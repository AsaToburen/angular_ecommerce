'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');
var es = require('event-stream');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var series = require('stream-series');

gulp.task('copy-html-files', function() {
  gulp.src(['./app/**/*.html', '!./app/index.html'], {base: './app'})
    .pipe(gulp.dest('build/'));
});

gulp.task('imagemin', function () {
    return gulp.src('./app/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('build/images/'));
});

gulp.task('usemin', function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat', rev()],
      vendor: [ rev() ],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
    return sass('app/sass/styles.scss') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('app/styles'));
});


// Concatenate vendor scripts 
var vendorStream = gulp.src(['./app/bower_components/**/*.js'])
  .pipe(concat('vendors.js'))
  .pipe(gulp.dest('build/'));
 
// Concatenate AND minify app sources 
var appStream = gulp.src(['./app/**/*.js'])
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/'));
 
gulp.src('./build/index.html')
  .pipe(inject(es.merge(vendorStream, appStream)))
  .pipe(gulp.dest('build/'));
 

gulp.task('watch', function() {
  //gulp.watch('./app/**/*.js', ['index']);
  gulp.watch('./app/sass/styles.scss', ['sass']);
});


gulp.task('connect', function() {
  connect.server({
    root: 'app/'
  });
});

gulp.task('default', ['watch',  'connect']);
gulp.task('build', ['copy-html-files', 'imagemin', 'inject', 'usemin']);






