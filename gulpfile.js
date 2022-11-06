const gulp = require('gulp');
const minifyJs = require('gulp-minify');
const minifyCss = require('gulp-clean-css');
const minifyHtml = require('gulp-htmlmin');

const outputName = 'dist';

gulp.task('build', async function () {
  gulp
    .src(['src/scripts/*.js'])
    .pipe(minifyJs({ noSource: true, ext: { min: '.js' } }))
    .pipe(gulp.dest(`${outputName}/scripts`));

  gulp
    .src(['src/scripts/core/*.js'])
    .pipe(minifyJs({ noSource: true, ext: { min: '.js' } }))
    .pipe(gulp.dest(`${outputName}/scripts/core`));

  gulp
    .src('src/styles/*.css')
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest(`${outputName}/styles`));

  gulp
    .src('src/*.html')
    .pipe(minifyHtml({ collapseWhitespace: true }))
    .pipe(gulp.dest(outputName));

  gulp.src('src/assets/*').pipe(gulp.dest(`${outputName}/assets`));

  // changelog
  gulp
    .src('changelog/*.css')
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest(`${outputName}/changelog`));

  gulp
    .src('changelog/*.html')
    .pipe(minifyHtml({ collapseWhitespace: true }))
    .pipe(gulp.dest(`${outputName}/changelog`));

  return;
});
