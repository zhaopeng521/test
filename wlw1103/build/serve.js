import gulp     from 'gulp';
import webpack  from 'webpack';
import url      from 'url';
import server    from 'browser-sync';
import config   from './config';
import proxyDevMiddleware   from 'proxy-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

gulp.task('serve', () => {
    const webpackConfig = require('./webpack.dev.config').default;
    webpackConfig.entry.app = [
        // 启用webpack HRM
        'webpack-hot-middleware/client?reload=true'
    ].concat(config.WEBPACK_ENTRY);

    var compiler = webpack(webpackConfig);
    var proxyOptions = url.parse(config.API_URL);
    proxyOptions.route = '/ctg-diting';

    server({
        port: process.env.PORT || config.SERVER_PORT,
        open: false,
        ghostMode:false,
        server: { 
            baseDir: config.PATH_SRC,
            routes: {
                '/dist': 'dist'
            }
        },
        middleware: [
            webpackDevMiddleware(compiler, {
                stats: {
                    colors: true,
                    chunks: false,
                    modules: false
                },
                publicPath: webpackConfig.output.publicPath
            }),
            webpackHotMiddleware(compiler),
            proxyDevMiddleware(proxyOptions)
        ]
    })
});
