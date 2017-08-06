import L from 'leaflet';
import marker from './marker.png';
import ctJSON from '../../data/ct.json';

export default {
    tiles: 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=050ca160e1704cc3bd050ea3a759e8b9',
    attr: 'Maps © <a href="http://www.thunderforest.com">Thunderforest</a>, Data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    center: [38.4858, -106.4795],
    zoom: 8,
    locationIcon: L.icon({
        iconUrl: marker,
        iconSize: [50, 50]
    }),
    markers: {
        start: [40.0596, -105.2086],
        end: [37.2811, -107.8540]
    },
    routes: {
        ct: ctJSON.features[0].geometry.coordinates.reduce((acc, [long, lat]) => {
                acc.push([lat, long]);
                return acc;
            }, []),
    }
};
