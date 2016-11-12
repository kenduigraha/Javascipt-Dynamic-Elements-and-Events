const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('default', function() {
  // place code for your default task here
  // livereload.listen(8080);
  browserSync.init({
        server: {
            baseDir: "./"
        },
        port : 8080
    })

  gulp.watch("./javascript/script.js").on("change", browserSync.reload)
  gulp.watch("*.html").on("change", browserSync.reload)
});
