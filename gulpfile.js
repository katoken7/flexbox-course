var gulp = require ("gulp");
var browserSync = require ("browserSync") .create();
var reload = browserSync.reload;

gulp.task('serve', Function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
});