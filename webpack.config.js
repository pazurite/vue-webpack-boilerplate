const path = require('path')

module.exports = {
    mode: 'development',
    // the starting point for our program
    entry: './src/main.js',
    output: {
        // the absolute path for the directory where we want the output to be placed
        path: path.resolve(__dirname, 'dist'),
        // the name of the file that will contain our output
        filename: 'main.bundle.js'
    }
}
