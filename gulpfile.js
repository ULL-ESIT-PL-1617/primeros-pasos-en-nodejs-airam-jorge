var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
var task = require('shell-task');

gulp.task('default', ['build', 'deploy', 'serve']);

gulp.task('build', shell.task(['npm run build']));

gulp.task('deploy', ['deployGitbookAndWiki', 'updateRepo']);

gulp.task('deployGitbookAndWiki', shell.task(['npm run deploy']));

gulp.task('serve',  function() {
  return gulp.src('').pipe(shell(['node hello.js']));
});

gulp.task('updateRepo', function() {
  return gulp.src('').pipe(shell([
      'git add .',
      'git commit -m "Auto commit from gulp"',
      'git push origin master'
  ]));
});

/*
gulp.task('deploy', function() {
      return gulp.src('').pipe(shell(['node run deploy']));
});

gulp.task('build', function() {
        return gulp.src('').pipe(shell(['node run build']));
});

gulp.task('buildwiki', function() {
        return gulp.src('').pipe(shell(['node ./scripts/generate-wiki.js']));
});});

gulp.task('deploywiki', function() {
  return gulp.src('').pipe(shell(['node ./scripts/deploy-wiki.js']));
});


gulp.task('deploygitbook', function() {
        return gulp.src('').pipe(shell(['node ./scripts/deploy-gitbook.js']));
});

gulp.task('buildgitbook', function() {
        return gulp.src('').pipe(shell(['node ./scripts/generate-gitbook.js']));
});
*/
