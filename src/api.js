import axios from 'axios';

function getInreach() {
    axios.get('localhost:9000/api')
        .then((res) => console.log(res))
        .catch((error) => console.warn(error));
}

function getBlog() {
    const url = 'https://www.googleapis.com/blogger/v3/blogs/4539705653135487149/posts';
    const params = '?fetchImages=true&orderBy=published&startDate=2017-04-01T00%3A00%3A00Z';
    const key = 'AIzaSyDKVJmuBWkQodX8Mhz-pOS_834_i2x426s';
    const fullUrl = `${url}${params}&key=${key}`;

    return axios.get(fullUrl)
        .then((res) => res.data)
        .catch((error) => console.warn(error));
}

export {getInreach, getBlog};
