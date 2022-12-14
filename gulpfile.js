const gulp = require('gulp');
const minifyJs = require('gulp-minify');
const minifyCss = require('gulp-clean-css');
const minifyHtml = require('gulp-htmlmin');
const babel = require('gulp-babel');

const outputName = 'dist';

gulp.task('build', async () => {
  gulp
    .src(['src/scripts/*.js'])
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(minifyJs({ noSource: true, ext: { min: '.js' } }))
    .pipe(gulp.dest(`${outputName}/scripts`));

  gulp
    .src(['src/scripts/core/*.js'])
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(minifyJs({ noSource: true, ext: { min: '.js' } }))
    .pipe(gulp.dest(`${outputName}/scripts/core`));

  gulp
    .src(['src/scripts/utils/*.js'])
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(minifyJs({ noSource: true, ext: { min: '.js' } }))
    .pipe(gulp.dest(`${outputName}/scripts/utils`));

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
    .src('changelog/changelog-scripts/*.js')
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(minifyJs({ noSource: true, ext: { min: '.js' } }))
    .pipe(gulp.dest(`${outputName}/changelog-scripts`));

  gulp
    .src('changelog/changelog-styles/*.css')
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest(`${outputName}/changelog-styles`));

  gulp
    .src('changelog/*.html')
    .pipe(minifyHtml({ collapseWhitespace: true }))
    .pipe(gulp.dest(`${outputName}/changelog`));

  return;
});
