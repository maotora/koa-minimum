import gulp from 'gulp'
import uglify from 'gulp-uglify'
import pump from 'pump'
import plumber from 'gulp-plumber'
import del from 'del'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import lint from 'gulp-eslint'
import connect from 'gulp-connect'
import gutil from 'gulp-util'
import mocha from 'gulp-mocha'

const paths = {
    app: {
        source: ['src/app.js', 'src/*.js', 'src/**/*.js'],
        dest: 'build/',
        build: 'build/app.js',
    },
    tests: {
        source: 'tests/**/*.js',
        pre_tests: [
            'tests/pre_test.js'
        ]
    }
}

export const clean = () => del([paths.app.dest])

function logging(text) {
    gutil.log(gutil.colors.black(gutil.colors.bgBlue(text)))
}

export const scripts = () => {
    logging('Running scripts ...')
    return gulp.src(paths.app.source)
        .pipe(lint())
        .pipe(lint.results(result => {
            gutil.log(`Total Results: ${gutil.colors.green(result.length)}`)
            gutil.log(`Total Warnings: ${gutil.colors.yellow(result.warningCount)}`)
            gutil.log(`Total Errors: ${gutil.colors.red(result.errorCount)}`)
        }))
        .pipe(babel())
        .pipe(uglify())
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(connect.reload())
        .pipe(gulp.dest(paths.app.dest))
}

export const server = () => {
    logging('Connecting to server ...')
    return connect.server({
        root: paths.app.build,
        livereload: true
    })
}

export function testing() {
    logging('Testing ...')
    return gulp.src(paths.tests.source)
        .pipe(mocha({
            reporter: 'nyan',
            require: paths.tests.pre_tests,
            compilers: 'js:babel-core/register'
        }))
        .pipe(connect.reload())
}

//- export const build = () => gulp.series(clean, scripts, testing)()

export const watch = () => {
    gulp.watch(paths.app.source, gulp.series(clean, scripts, testing))
    gulp.watch(paths.tests.source, gulp.series(clean, scripts, testing))
}

export default () => gulp.series(clean, scripts, testing, gulp.parallel(server, watch))()
