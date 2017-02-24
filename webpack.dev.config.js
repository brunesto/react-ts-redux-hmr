var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');


// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
//const { CheckerPlugin } = require('awesome-typescript-loader')


// compile time variables which will be injected into the code
const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('development'),
    '__TIMESTAMP__': JSON.stringify(new Date()),
}

module.exports = {


    devtool: 'source-map',
    // This will be our app's entry point (webpack will look for it in the 'src' directory due to the modulesDirectory setting below). Feel free to change as desired.
    entry: [
        // Add the react hot loader entry point - in reality, you only want this in your dev Webpack config
        // CAPCTHA: all react components are proxied by react-hot-loader, which causes blueprintjs table/column check fail
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'tsx/backbone/index-hmr.tsx'
    ],
    // Output the bundled JS to dist/app.js
    output: {
        filename: 'app.js',
        publicPath: '/dist',
        path: path.resolve('dist')
    },
    resolve: {
        // Look for modules in .ts(x) files first, then .js(x)
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // Add 'src' to our modulesDirectories, as all our app code will live in there, so Webpack should look in there for modules

        modules: ['src', 'node_modules'],
    },

    module: {
        loaders: [
            // -- code ------------------------------------------------
            {test: /\.jsx?$/, loaders: ['babel-loader']},

            // using ats loader
            //{test: /\.tsx?$/, loaders: ['awesome-typescript-loader?useBabel=true&useCache=true']},

            // using ts loader
            // .ts(x) files should first pass through the Typescript loader, and then through babel
            {test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader']},



        ]
    },

    plugins: [

        // Add the Webpack HMR plugin so it will notify the browser when the app code changes
       new webpack.HotModuleReplacementPlugin(),

        // prints more readable module names in the browser console on HMR updates
       new webpack.NamedModulesPlugin(),

        // WebpackNotifierPlugin shows toast on the desktop to notify about compile errors
        // Set up the notifier plugin - you can remove this (or set alwaysNotify false) if desired
        new WebpackNotifierPlugin({alwaysNotify: false}),


        // DefinePlugin is like a preprocessor. https://facebook.github.io/react/downloads.html
        // NOTE: DefinePlugin does not work with ats, so compile time GLOBALS are replaced only in .js files
        new webpack.DefinePlugin(GLOBALS),

    ]
};
