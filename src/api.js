import axios from 'axios';

function getInreach() {
    axios.get('localhost:9000/api')
        .then((res) => console.log(res))
        .catch((error) => console.warn(error));
}

function getBlogPosts() {
    const url = 'https://www.googleapis.com/blogger/v3/blogs/4539705653135487149/posts';
    const key = 'AIzaSyDKVJmuBWkQodX8Mhz-pOS_834_i2x426s';

    return axios.get(url, {
        params: {
            fetchImages: true,
            orderBy: 'published',
            startDate: '2017-04-01T00:00:00Z',
            key: key
        }
    })
        .then((res) => res.data)
        .catch((error) => console.warn(error));
}

export {getInreach, getBlogPosts};
