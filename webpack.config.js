const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        // publicPath: 'dist/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist/')
            // __dirname node.js 絶対パス ファル名だけ削除
        },
        hot: true,
        open: true,
    }
}