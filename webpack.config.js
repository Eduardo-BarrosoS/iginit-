const path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js',
      },
    resolve: {
        extensions: [ '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /none_module/,
                use: 'babel-loader'
            }
        ]
    },
};