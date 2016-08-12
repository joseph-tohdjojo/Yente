/*------------------------------------*\
  #DEPENDENCIES
\*------------------------------------*/

var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var postcss = require('gulp-postcss');
var sourcemaps  = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var nodemon = require('gulp-nodemon');
var path = require('path');





/*------------------------------------*\
  #FILE PATHS
\*------------------------------------*/

var paths = {
  jsSource: ['./development/app.js', './development/angulargrid.js', './development/mainCtrl.js', 'development/**/*.js'],
  sassSource: ['./development/styles/all.scss'],
	htmlSource: ['./development/index.html', 'development/**/*.html']
};





/*------------------------------------*\
  #TASKS
\*------------------------------------*/

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(sourcemaps.init())
  .pipe(babel()) //Uncomment if using ES6
  .pipe(concat('bundle.js'))
	// .pipe(annotate())
  // .pipe(uglify()) //Uncomment when code is production ready
  .pipe(gulp.dest('./public'));
});

gulp.task('start', function () {
  nodemon({
    script: './server/server.js',
	  ext: 'js html scss',
	  env: { 'NODE_ENV': 'development' },
  	ignore: ['public/*.*'],
  	tasks: function(files) {
      const tasks = [];
      files.forEach(function(file) {
        if (path.extname(file) === '.js' && !tasks.includes('.js')) {
          tasks.push('js')
        }
        if (path.extname(file) === '.scss' && !tasks.includes('.scss')) {
          tasks.push('sass')
        }
      })
      return tasks;
    }
  })
});

gulp.task('sass', function () {
  return gulp.src(paths.sassSource)
		.pipe(sourcemaps.init())
	  .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public'));
});

gulp.task('html', function() {
	return gulp.src(paths.htmlSource)
		.pipe(gulp.dest('./public'));
});





/*------------------------------------*\
  #WATCH TASKS
\*------------------------------------*/

gulp.task('watch', function() {
  // gulp.watch(paths.jsSource, ['js']);
  // gulp.watch(paths.sassSource, ['scss']);
  // gulp.watch(paths.htmlSource, ['html']);
});





/*------------------------------------*\
  #RUN DEFAULT TASKS
\*------------------------------------*/

gulp.task('default', ['js', 'sass', 'html', 'watch', 'start']);
