const gulp=require("gulp");
const sass=require("gulp-sass");


//监听任务
gulp.task("watchall",async()=>{
	//监听html,进行复制
	gulp.watch("*.html",async()=>{
		gulp.src("*.html")
		.pipe(gulp.dest("C:\\phpStudy\\WWW\\Pinduoduo"))
	});

	//监听sass文件
	gulp.watch("sass/**/*",async()=>{
		gulp.src("sass/**/*")
		.pipe(sass())
		.pipe(gulp.dest("C:\\phpStudy\\WWW\\Pinduoduo\\css"))
	})
})

// var gulp = require("gulp");

// gulp.task("copy-html", async function(){
// 	gulp.src("./**/**")
// 	.pipe(gulp.dest("C:\\phpStudy\\WWW\\Pinduoduo"));
// });
