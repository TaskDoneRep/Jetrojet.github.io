const gulp = require('gulp');
const less = require('gulp-less');
// const autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function(){
	gulp.src('./assets/css/style.less')
		.pipe(less())
		.pipe(gulp.dest('assets/css/'));
	});


// gulp.task('default', () =>
//     gulp.src('./assets/**/*.css')
//         .pipe(autoprefixer({
//             browsers: ['last 15 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('assets'))
// );


gulp.task('less:watch', function(){
	gulp.watch('assets/**/*.less', ['less']);
});