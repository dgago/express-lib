const clean = require("gulp-clean");
const concat = require("gulp-concat");
const gulp = require("gulp");

gulp.task("declarations", ["concat-declarations", "clean-declarations"]);

gulp.task("concat-declarations", () => {
  gulp
    .src("./dist/types/**/*.d.ts")
    .pipe(concat("index.d.ts"))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("clean-declarations", () => {
  gulp.src("./dist/types").pipe(clean());
});
