var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');

// task para default gulp
gulp.task('default', ['sass','watch']);
	
});

// task para sass
gulp.task('sass', function(){
	return sass('sass/**/*.sass').pipe(gulp.dest('css'));
});

//task para watch
gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass',['sass']);
});