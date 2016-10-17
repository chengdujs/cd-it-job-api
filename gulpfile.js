require('shelljs/global');
const gulp = require('gulp');
const notifier = require('node-notifier');
const devServer = require('gulp-develop-server');

// 是否是构建发布版本
let isRelease = process.argv.indexOf('-r') > 0;

const notify = (message, opt) => {
  opt = opt || {};
  notifier.notify({
    title: 'Notify',
    message: message,
    sound: opt.sound === true, // Only Notification Center or Windows Toasters
  });
};

gulp.task('clean', done => {
  rm('-rf', 'dist');
  done();
});

gulp.task('copy', () => {
  return gulp.src([
    './src/**',
    './package.json'
  ])
    .pipe(gulp.dest('./dist'));
});

gulp.task('serve', done => {
  devServer.listen({ path: './src/index.js' });
  done();
});

gulp.task('restart', done => {
  devServer.restart();
  notify('Restart successfully.');
  done();
});

gulp.task('watch', done => {
  gulp.watch([
    './src/**/*'
  ], gulp.series('restart'));
  done();
});

let tasks = isRelease ? ['clean', 'copy'] : ['serve', 'watch'];

gulp.task('default', gulp.series(...tasks));