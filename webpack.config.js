var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'client') + '/instagram.js',
    output: {
        path: path.resolve(__dirname) + '/client',
        filename: 'bundle.js',
        publicPath: '/client/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'client'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    "plugins": ["transform-object-rest-spread"]
                }
            },
    {
      test: /\.styl$/,
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    }

        ]
    },
    watch:true
};
