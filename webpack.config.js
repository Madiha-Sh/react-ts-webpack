const path = require('path')
// import path from 'path'
const rules = [   // array of objects
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader' 
  }
]

module.exports = { // object
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: { // object
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: { rules },
  resolve: {extensions: ['.ts','.tsx','.js']},
  devServer: {
    static: './',
    port: 5000
  }
}