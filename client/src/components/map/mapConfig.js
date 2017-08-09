import L from 'leaflet';
import ctJSON from '../../data/ct.json';
import AwesomeMarkers from '../../Leaflet.awesome-markers/dist/leaflet.awesome-markers.js'; // eslint-disable-line no-unused-vars

L.AwesomeMarkers.Icon.prototype.options.prefix = 'ion';

export default {
    tiles: 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=050ca160e1704cc3bd050ea3a759e8b9',
    attr: 'Maps © <a href="http://www.thunderforest.com">Thunderforest</a>, Data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    center: [38.4858, -106.4795],
    zoom: 8,
    bounds: [[37.250, -108.1549], [40.220, -108.1549], [40.220, -104.8206], [37.250, -104.8206]],
    icons: {
        start: L.AwesomeMarkers.icon({
            icon: 'home',
            markerColor: 'green'
        }),
        end: L.AwesomeMarkers.icon({
            icon: 'home',
            markerColor: 'red'
        }),
        camp: L.AwesomeMarkers.icon({
            icon: 'record',
            markerColor: 'red'
        }),
        location: L.AwesomeMarkers.icon({
            icon: 'android-bicycle',
            markerColor: 'blue'
        }),
    },
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
