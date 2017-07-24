import React, { Component } from 'react';
import {Map, TileLayer} from 'react-leaflet';
import omnivore from 'leaflet-omnivore';
import renderHTML from 'react-render-html';

import './App.css';
import '../node_modules/leaflet/dist/leaflet.css';
import feed from './feed';
import {getInreach, getBlog} from './api.js';


const tiles = 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=050ca160e1704cc3bd050ea3a759e8b9';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [36.499608, -106.274313];
const mapZoom = 10;

class App extends Component {

    render() {
        return (
            <div>
                <RouteMap/>
                <Posts/>
            </div>
        );
    }
}

class RouteMap extends Component {
    componentDidMount() {
        const leafletMap = this.leafletMap.leafletElement;
        omnivore.kml.parse(feed).addTo(leafletMap);
        // getInreach();
    }

    render() {
        return (
            <div>
                <Map
                    ref={m => {this.leafletMap = m;}}
                    center={mapCenter}
                    zoom={mapZoom}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={tiles}
                    />
                </Map>
            </div>
        )
    }
}

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: null
        };

    }

    componentDidMount() {
        getBlog().then((res) => this.setState({posts: res.items}));
    }

    render() {
        if (!this.state.posts) { return null }

        return (
            <div>
                {renderHTML(this.state.posts[0].content)}
            </div>
        )
    }
}

export default App;
