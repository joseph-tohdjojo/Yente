// REQUIRE DEPENDENCIES
// ============================================================
var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var postcss = require('gulp-postcss');
var sourcemaps  = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

// DECLARE FILE PATHS
// ============================================================
var paths = {
  jsSource: ['./development/app.js', './development/mainCtrl.js', 'development/**/*.js'],
  sassSource: ['./development/styles/reset.scss', './development/styles/main.scss', 'development/**/*.scss'],
	htmlSource: ['./development/index.html', 'development/**/*.html']
};
// DEFINE TASKS
// ============================================================
gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(babel()) //Uncomment if using ES6
  .pipe(concat('bundle.js'))
	// .pipe(ngAnnotate())
  // .pipe(uglify()) //Uncomment when code is production ready
  .pipe(gulp.dest('./public'));
});
gulp.task('sass', function () {
  return gulp.src(paths.sassSource)
    .pipe(concat('style.css'))
	  .pipe(sass())
		.pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public'));
});
gulp.task('html', function() {
	return gulp.src(paths.htmlSource)
		.pipe(gulp.dest('./public'));
});

// WATCH TASKS
// ============================================================
gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.sassSource, ['sass']);
  gulp.watch(paths.htmlSource, ['html']);
});
// RUN DEFAULT TASK - first thing to run when gulp is called
// ============================================================
gulp.task('default', ['watch', 'js', 'sass', 'html']);
