var gulp = require ("gulp");
var browserSync = require ("browserSync") .create();
var reload = browserSync.reload;

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
});