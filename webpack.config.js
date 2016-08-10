var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var EXERCISES_DIR = path.resolve(process.cwd(), 'exercises');

function buildEntries() {
  return fs.readdirSync(EXERCISES_DIR).reduce(function (entries, dir) {
    var file = path.join(EXERCISES_DIR, dir, 'index.js');

    if (fs.existsSync(file)) {
      entries[dir] = file;
    }

    return entries;
  }, {});
}

module.exports = {

  entry: buildEntries(),

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: 'exercises/__build__',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js')
  ]

};
