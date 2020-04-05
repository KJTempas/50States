module.exports = {
    devServer: {
        proxy: 'http:///127.0.0.1:3000'
    }
}
//this file tells Vue to send all request to the API to my Node/Express server