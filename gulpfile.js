var gulp = require('gulp');
var connect = require('gulp-connect');
var htmlmin = require('gulp-htmlmin');
var copy = require('gulp-copy');
var uglify = require('gulp-uglify');
var files = ['index.html', 'Content/css/style.css'];

// LiveReload
gulp.task('files', function() {
	gulp.src(files).pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(files, ['files']);
});

gulp.task('connect', function() {
	connect.server({livereload: true});
});

// Copy e minify HTML
gulp.task('minify-html', function() {
   return gulp.src('index.html')
   	.pipe(htmlmin({collapseWhitespace: true}))
   	.pipe(gulp.dest('dist/'))
});

// Copia a pasta de css
gulp.task('copy-css', function () {
	return gulp.src(['Content/css/style.css'])
		.pipe(gulp.dest('dist/Content/css'));
});

// Copia angular.js
gulp.task('copy-angular', function () {
	return gulp.src(['Content/dependencies/angular/angular.min.js'])
		.pipe(gulp.dest('dist/Content/dependencies/angular'));
});

// Copia js
gulp.task('copy-js', function () {
	return gulp.src(['Content/js/app.js'])
		.pipe(gulp.dest('dist/Content/js'));
});

// Copia a pasta de imgs
gulp.task('copy-imgs', function () {
	return gulp.src(['Content/imgs/*'])
		.pipe(gulp.dest('dist/Content/imgs'));
});

// Copia a pasta de favicon
gulp.task('copy-favicon', function () {
	return gulp.src(['Content/imgs/favicon/*'])
		.pipe(gulp.dest('dist/Content/imgs/favicon'));
});

gulp.task('default', [
	'connect', 
	'watch', 
	'minify-html',
	'copy-css',
	'copy-angular',
	'copy-js',
	'copy-imgs',
	'copy-favicon'
]);