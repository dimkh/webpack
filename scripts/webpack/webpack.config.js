// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Constants
const {
  PROJECT_ROOT,
  SOURCE_DIRECTORY,
  BUILD_DIRECTORY,
} = require('./constants.js');

// console.log('Папка для удаления: ', BUILD_DIRECTORY);

// При удалении вывод информации на консоль
const cleanOptions = {
  verbose: true,
};

module.exports = () => {

  return {
    mode: 'none',
    devtool: false,
    entry: SOURCE_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY,
      filename: 'bundle.js',
    },
    plugins: [
      // Каждый плагин - это конструктор
      new HtmlWebpackPlugin({
        template: './static/template.html',
        title: 'Изучаем Webpack',
        favicon: './static/favicon.ico'
      }),
      new CleanWebpackPlugin(cleanOptions),
    ],
  };
};
