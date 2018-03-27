var gulp = require("gulp");

//app Flavorname
var appFlavor = "app1";

var pathOverWrite = [
  "./rootSrc/core/**", 
  "./rootSrc/" + appFlavor + "/**"];
var pathWatch = "rootSrc/" + appFlavor + "/**";

//overwrite main with app flavor
gulp.task("overwrite", () => {
  gulp.src(pathOverWrite)
  .pipe(gulp.dest("./rnproject/src"));
});

//watching app folder for changes
gulp.task("watcher", () => {
  gulp.watch(pathWatch, ["overwrite"]);
});

//series run of two tasks
gulp.task("start", ["overwrite", "watcher"]);
  