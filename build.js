const path = require('path')
const webpack = require('webpack')

var destination = 'dist'

webpack({
  mode: 'production',
  entry: './node_modules/dcp/src/protocol.js',
  output: {
    filename: 'protocol.min.js',
    path: path.resolve(__dirname, destination)
  }
}, (error, stats) => {
  if (error) {
    console.log(error)
  }

  if (stats.hasErrors()) {
    console.log(stats)
  }

  console.log('Protocol Minified')
})

webpack({
  mode: 'production',
  entry: './node_modules/dcp/src/compute.js',
  output: {
    filename: 'compute.min.js',
    path: path.resolve(__dirname, destination)
  }
}, (error, stats) => {
  if (error) {
    console.log(error)
  }

  if (stats.hasErrors()) {
    console.log(stats)
  }

  console.log('Compute Minified')
})
