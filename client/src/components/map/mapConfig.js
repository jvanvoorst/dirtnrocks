import L from 'leaflet';
import ctJSON from '../../data/ct.json';
import AwesomeMarkers from '../../Leaflet.awesome-markers/dist/leaflet.awesome-markers.js'; // eslint-disable-line no-unused-vars

L.AwesomeMarkers.Icon.prototype.options.prefix = 'ion';

export default {
    // tiles: 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=050ca160e1704cc3bd050ea3a759e8b9',
    tiles: 'http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
    // attr: 'Maps © <a href="http://www.thunderforest.com">Thunderforest</a>, Data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    attr: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    center: [38.4858, -106.4795],
    zoom: 8,
    bounds: [[37.250, -108.1549], [40.220, -108.1549], [40.220, -104.8206], [37.250, -104.8206]],
    locationZoomFactor: .07,
    icons: {
        start: L.AwesomeMarkers.icon({
            icon: 'home',
            markerColor: 'cadetblue'
        }),
        end: L.AwesomeMarkers.icon({
            icon: 'home',
            markerColor: 'darkred'
        }),
        camp: L.AwesomeMarkers.icon({
            icon: 'record',
            markerColor: 'darkpurple'
        }),
        location: L.AwesomeMarkers.icon({
            icon: 'android-bicycle',
            markerColor: 'blue'
        }),
    },
    markers: {
        start: [40.0618, -105.2069],
        end: [37.2812, -107.8584]
    },
    routes: {
        ct: ctJSON.features[0].geometry.coordinates.reduce((acc, [long, lat]) => {
            acc.push([lat, long]);
            return acc;
        }, []),
    }
};
