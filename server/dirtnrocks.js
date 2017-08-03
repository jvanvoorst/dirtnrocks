 const axios = require('axios');
 const express = require('express');

 const app = express();

 axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

 app.get('/api', function(req, res) {
    getInreach(res);
 });

const port = 9000;

app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});

const getInreach = function(res) {
    const url = 'https://share.delorme.com/feed/share/kristievanvoorst'
    axios.get(url, {
        auth: {
            username: null,
            password: 'sheisriding'
        }
    })
    .then((response) => res.send(response.data))
    .catch((error) => console.warn(error));
}
