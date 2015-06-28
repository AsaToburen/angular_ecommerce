'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');
var es = require('event-stream');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var del = require('del');
var series = require('stream-series');
//var paths = require('paths');

gulp.task('copy-html-files', function() {
    gulp.src(['./app/**/*.html', '!./app/index.html'], {
            base: './app'
        })
        .pipe(gulp.dest('build/'));
});

gulp.task('copy-fonts', function() {
   gulp.src('./app/bower_components/ionicons/fonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('./build/fonts'));
});


gulp.task('imagemin', function() {
    return gulp.src('./app/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest('build/images/'));
});

gulp.task('usemin', function() {
    gulp.src('./app/index.html')
        .pipe(usemin({
            css: [minifyCss(), 'concat', rev()],
            vendor: [rev()],
            js: [uglify(), rev()]
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
    return sass('app/sass/application.scss')
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('app/styles'));
});

gulp.task('clean', function() {
    del(['build'], function(err, paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});

gulp.task('watch', function() {
    gulp.watch('./app/**/*.js', ['index']);
    gulp.watch([
        './app/sass/*.scss',
        './app/sass/**/*.scss'
    ], ['sass']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'app/'
    });
});

gulp.task('default', ['watch', 'connect']);
gulp.task('build', ['copy-html-files', 'copy-fonts', 'imagemin', 'usemin']);
