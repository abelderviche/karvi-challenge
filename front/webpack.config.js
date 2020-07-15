const HtmlWebpackPlugin  = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename:"./index.html"
})

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:['babel-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        esModule: false,
                      },
                    },
                  ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              }
        ]
    },
    plugins:[htmlPlugin]
};