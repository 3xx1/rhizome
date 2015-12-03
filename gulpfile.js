var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task("sass", function() {
    gulp.src("sass/**/*scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"));
});

gulp.task('watch', ['sass', 'js'], function(){
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['js']);
});

gulp.task('default', ['sass']);
