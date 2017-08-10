import axios from 'axios';
import toGEOJSON from 'togeojson';

function getInreach(password) {
    return (
        axios.get('api/inreach', {
            params: {
                password: password
            }
        })
        .then((res) => {
            const dom = (new DOMParser()).parseFromString(res.data, 'text/xml');
            return toGEOJSON.kml(dom);
        })
    );
}

function getBlogPosts() {
    const url = 'https://www.googleapis.com/blogger/v3/blogs/4539705653135487149/posts';
    const key = 'AIzaSyDKVJmuBWkQodX8Mhz-pOS_834_i2x426s';

    return axios.get(url, {
        params: {
            fetchImages: true,
            orderBy: 'published',
            startDate: '2017-08-01T00:00:00Z',
            key: key
        }
    })
        .then((res) => res.data)
        .catch((error) => console.warn(error)); // eslint-disable-line no-console
}

export {getInreach, getBlogPosts};
