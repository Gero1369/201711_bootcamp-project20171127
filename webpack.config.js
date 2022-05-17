module.exports = {
    entry: './source/app.jsx',
    output: {
        filename: './build/bundle.js'
    },
    module: {
        loaders: [
            {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loaders: ['babel-loader']
            }
        ]
    }
}