const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

const FRONTEND_DIR = path.resolve(__dirname, 'src');

const appConfig = {
    entry: path.join(FRONTEND_DIR, "/index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        host: '0.0.0.0',
        hot: true,
        port: 4000,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "dist")
    },
};

const config = {
    mode: 'development',
    devtool: "source-map-loader",
    resolve: {
        extensions: [" ", ".ts", ".tsx", ".js", ".svg"],
        alias: {
          src: path.resolve(FRONTEND_DIR, 'src')
        }
    },
    devServer: {
        host: '0.0.0.0',
        hot: true,
        port: 4000,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                include: path.join(FRONTEND_DIR, 'src'),
                loaders: [
                    'style-loader',
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            chunksSortMode: 'dependency',
            template: path.resolve(FRONTEND_DIR, 'index.html')
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(FRONTEND_DIR, 'public'),
            to: path.resolve(__dirname, "dist/public"),
        }])
    ],
    node: {
        fs: 'empty'
    }

};

module.exports = function(env, argv) {
    return Object.assign({}, config, appConfig);
};
