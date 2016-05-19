/*global -$ */
'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var dir__public = 'public';
var dir__data = 'data';
var dir__src_html = 'views';
var dir__src_js = 'js';
var dir__src_test = 'test';
var dir__dist = 'dist';
var dir__www = 'www';

var server;

gulp.task('serve', ['www'], function () {
  server = browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: [dir__www],
      index: 'index.html',
      routes: {
        '/bower_components': 'bower_components',
        '/js': 'js'
      }
    }
  });
  gulp.watch(dir__src_html+'/**/*.html', ['html']);
  gulp.watch(dir__src_js+'/**/*.js', ['js']);
});


gulp.task('js', function () {
  return gulp.src(dir__src_js+'/**/*.js')
    //.pipe($.sourcemaps().init())
    .pipe($.uglify())
    //.pipe($.sourcemaps().write())
    .pipe(gulp.dest(dir__www + '/js/'))
    .pipe(browserSync.stream());
});

gulp.task('lint', function() {
    gulp.src(dir__src_js+'/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'))
});

gulp.task('unit-test', function() {
    gulp.src(dir__src_test+'/*.js')
    .pipe($.mocha())
});

gulp.task('access', function() {
    gulp.src(dir__src_html+'/**/*.html')
    .pipe($.a11y())
    .pipe($.a11y.reporter());
});

gulp.task('test', ['lint','unit-test','access']);

gulp.task('browserify', function () {
  var b = browserify({
    entries: dir__src_js+'/strong.js',
    debug: true
  });

  b.bundle().on('error', handleError)
    .pipe(source('strong.js'))
    .pipe(buffer())
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.uglify())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(dir__www+'/js/'))
    .pipe(browserSync.stream());
});




gulp.task('html', function () {
  return gulp.src(dir__src_html+'/**/*.html')
    .pipe(gulp.dest(dir__www))
    .pipe(browserSync.stream());
});

// process static files
gulp.task('public', function() {
  return gulp.src(dir__public+'/**/*')
	  .pipe(gulp.dest(dir__www));
});


//build
gulp.task('www', $.sequence('clean',['public','html','browserify','test']));

gulp.task('default', ['www'], function () {
  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: [dir__www],
      index: 'index.html',
      routes: {
        '/bower_components': 'bower_components',
        '/api': dir__data
      }
    }
  });
  gulp.watch(dir__src_html+'/**/*.html', ['html','access']);
  gulp.watch(dir__src_js+'/**/*.js', ['browserify','lint','unit-test']);
});

gulp.task('clean', del.bind(null, ['.tmp', dir__www]));

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

