var path = require('path');
module.exports = {
    entry: './app/app.js',
    output: {
        filename: './App/public/js/main.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }
        ]
    },
    resolve: {
        root: [
          path.resolve('./app/src')
        ],
        modulesDirectories: ['node_modules'],
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    },
    watch: true,
};