import gulp     from 'gulp';
import gutil    from 'gulp-util';
import del      from 'del';
import path     from 'path';
import webpack  from 'webpack';
import config   from './config';
import sequence from 'run-sequence';

gulp.task('clean-dist', () => {
    del([config.PATH_DIST]).then(function (paths) {
        gutil.log("[clean]", paths);
    })
});

gulp.task('copy', () => {
    gulp.src(path.join(config.PATH_SRC, 'api/**/*'))
        .pipe(gulp.dest(path.join(config.PATH_DIST, 'api')));

    gulp.src(path.join(config.PATH_SRC, 'libs/**/*'))
        .pipe(gulp.dest(path.join(config.PATH_DIST, 'libs')));
});

gulp.task('build', ['clean-dist'], () => {
    const webpackConfig = require('./webpack.dist.config').default;
    webpackConfig.entry.app = config.WEBPACK_ENTRY;

    webpack(webpackConfig, (err, stats) => {
        if(err) {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString({
            colors: true,
            chunks: false,
            errorDetails: true
        }));

        sequence('copy');
    });
});