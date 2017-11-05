import webpack       from 'webpack';
import config        from './config';
import webpackConfig from './webpack.config';

webpackConfig.devtool = 'inline-source-map';

webpackConfig.output = {
    filename: 'script/[name].js',
    publicPath: '/',
    path: config.PATH_SRC
};

webpackConfig.module.loaders = webpackConfig.module.loaders.concat([
    {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer!sass'
    }, {
        test: /\.css$/,
        loader: 'style!css'
    }
]);

webpackConfig.plugins = webpackConfig.plugins.concat([
    /**
     * 增加webpack HMR支持
     * 监听到文件改动后自动刷新浏览器
     */
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        PRODUCTION: false,
        API_IP: config.API_URL
    }),

    /**
     * 定义全局变量
     */
    new webpack.DefinePlugin({ 'env':'"dev"' }),
]);

console.log(config.REMOTE_SERVER_IP, config.REMOTE_SERVER_PORT);

export default webpackConfig;