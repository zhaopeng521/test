import webpack from 'webpack';
import config  from './config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: {},
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/src\/libs/, /node_modules/],
                loader: 'ng-annotate!babel'
            }, {
                test: /\.view\.html$/,
                loader: 'ngtemplate?relativeTo=' + config.PATH_SRC + '/app/!html'
            }, {
                test: /xterm.*\.html$/,
                loader: 'html'
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.png/,
                loader: 'url?name=images/[name].[ext]&limit=' + config.BASE64_LIMIT + '&mimetype=image/png'
            }, {
                test: /\.jpg/,
                loader: 'url?name=images/[name].[ext]&limit=' + config.BASE64_LIMIT + '&mimetype=image/jpg'
            }, {
                test: /\.gif/,
                loader: 'url?name=images/[name].[ext]&limit=' + config.BASE64_LIMIT + '&mimetype=image/gif'
            }
        ]
    },
    resolveLoader: {
        noParse: []
    },
    devtool: "eval",
    resolve: {
        // alias: {
        //     colresizable: config.PATH_NODE_MODULES + '/colresizable/colResizable-1.5.min.js',
        // }
     },
    plugins: [
        /**
         * 将webpack打包后的js插入html中
         */
        new HtmlWebpackPlugin({
            template: config.PATH_SRC + '/index.html',
            inject: 'body',
            hash: true
        }),

        /**
         * 合并公用代码
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                return module.resource && module.resource.indexOf(config.PATH_SRC) === -1;
            }
        })
    ]
};