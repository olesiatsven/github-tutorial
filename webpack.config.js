const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'my-bundle.js',

    },
    module: {
        rules: [
      {
        test: /\.css$/i,
                use: ['style-loader',
                    "MiniCssExtractPlugin.loader",
                    "css-loader",
                    'sass-loader'],
            },
            {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new MiniCssExtractPlugin({ filename: 'styles.css'})],
    devServer: {
        port: 4444,
        open: 'true',
        stats: 'errors-only',
    
  },
};
