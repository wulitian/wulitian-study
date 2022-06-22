const {task, series, parallel, src, dest, watch} = require('gulp');

const cleancss = require('gulp-clean-css')

function min(){
    src('css/*.css')
        .pipe(cleancss())
        .pipe(dest('dist/css'))
}
task('min-css',(cb)=>{
    console.log(cb)
    min();
    cb();
})

watch('css/*.css', { delay: 500 }, (cb) => {
    min();
    cb();
});

exports.default = series('min-css');
