const gulp=require("gulp");
const uglify = require("gulp-uglify");
const minifycss = require("gulp-minify-css");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass");



//监听任务
gulp.task("watchall",async ()=>{
    //定义一个监听器，监听文件是否有改变，如果有改变，则自动拷贝。
    gulp.watch("*.html",async ()=>{
        //把当前目录下的所有html文件拷贝至目录：dist
        gulp.src("*.html")
        .pipe(gulp.dest("C:\\phpStudy\\WWW\\Pinduoduo"));
    });

      gulp.watch("js/*.js",async ()=>{
        gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("C:\\phpStudy\\WWW\\Pinduoduo\\js"));
    });

      gulp.watch("css/*.css",async ()=>{
        gulp.src("css/*.css")
        .pipe(minifycss())
        .pipe(gulp.dest("C:\\phpStudy\\WWW\\Pinduoduo\\css"));
    });
      gulp.watch("img/**/*",async ()=>{
        gulp.src("img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("C:\\phpStudy\\WWW\\Pinduoduo\\img"));
    });
      gulp.watch("sass/**/*.scss",async ()=>{
        gulp.src("sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("C:\\Pinduoduo\\css"));
    });

    gulp.watch("php/**/*",async ()=>{
      gulp.src("php/**/*")
      .pipe(gulp.dest("C:\\phpStudy\\WWW\\Pinduoduo\\php"));
  });
})