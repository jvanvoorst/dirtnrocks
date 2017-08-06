const axios = require('axios');
const express = require('express');
const path = require('path');

const app = express();

app.get('/api', function(req, res) {
    getInreach(res);
});

if (process.env.NODE_ENV !== 'production') {
    const webpackMiddleWare = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.js');
    app.use(webpackMiddleWare(webpack(webpackConfig)));
} else {
    app.use(express.static('dist'));
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '/index.html'));
    });
}


const port = 9000;

app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});

const getInreach = function(res) {
    const url = 'https://share.delorme.com/feed/share/kristievanvoorst';
    axios.get(url, {
        auth: {
            username: null,
            password: 'sheisriding'
        }
    })
    .then((response) => res.send(response.data))
    .catch((error) => console.warn(error));
};
