'use string'

const webpack = require('webpack');

const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config');

new WebpackDevServer(webpack(config),{
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {colors: true}
}).listen(3000, (ex)=>{
    if (ex) {
        return console.log(ex);
    }

    console.log('Servidor on');
});