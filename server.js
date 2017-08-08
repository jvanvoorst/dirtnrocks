const axios = require('axios');
const express = require('express');
// const path = require('path');

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('/api/inreach', function(req, res) {
    getInreach(req, res);
});

const port = 3001;

app.listen(port, function() {
    console.log(`Server running on port ${port}`); // eslint-disable-line no-console
});

const getInreach = function(req, res) {
    const url = 'https://share.delorme.com/feed/share/kristievanvoorst?d1=2017-04-13&d2=2017-04-17';
    axios.get(url, {
        auth: {
            username: null,
            password: req.query.password
        }
    })
    .then((response) => res.send(response.data))
    .catch((error) => console.warn(error)); // eslint-disable-line no-console
};
