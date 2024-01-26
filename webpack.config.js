const path = require('path')

const config = {
    entry: './src/index.js',
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'build') //yêu cầu đường dẫn tuyệt đối
    }
}

module.exports =  config