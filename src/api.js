import axios from 'axios';

function getKML() {
    const url = 'https://share.delorme.com/feed/share/kristievanvoorst'

    axios.get(url, {
        auth: {
            username: null,
            password: 'sheisriding'
        }
    })
        .then((res) => console.log(res))
        .catch((error) => console.warn(error));

}

export {getKML};
