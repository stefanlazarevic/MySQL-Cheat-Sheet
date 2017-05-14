const gulp = require('gulp'),
      sass = require('gulp-sass'),
      jade = require('gulp-jade');

const showError = () => console.error.bind(console);

gulp.task('jade', function() {
  gulp.src('src/jade/index.jade')
      .pipe(jade().on('error', showError()))
      .pipe(gulp.dest('dist/'))
});

gulp.task('sass', function() {
  gulp.src('src/sass/main.scss')
      .pipe(sass(
        {outputStyle: 'compressed'}
      ).on('error', sass.logError))
      .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**', ['jade', 'sass']);
});

gulp.task('default', ['jade', 'sass']);
