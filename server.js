const axios = require('axios');
const express = require('express');
// const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3001);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('/api/inreach', function(req, res) {
    getInreach(req, res);
});

app.listen(app.get('port'), () => {
    console.log(`Running in ${process.env.NODE_ENV} at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});


const getInreach = function(req, res) {
    const url = 'https://share.delorme.com/feed/share/kristievanvoorst?d1=2017-08-10';
    axios.get(url, {
        auth: {
            username: null,
            password: req.query.password
        }
    })
    .then((response) => res.send(response.data))
    .catch((error) => {
        if (error.response) {
            if (error.response.status === 401) {
                res.sendStatus(error.response.status);
            }
        }
    });
};
