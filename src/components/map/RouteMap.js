import React, { Component } from 'react';

import feed from '../../data/feed';
import L from 'leaflet';

import {Map, TileLayer, Marker, Popup } from 'react-leaflet';
import omnivore from 'leaflet-omnivore';
import tj from 'togeojson';

const tiles = 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=050ca160e1704cc3bd050ea3a759e8b9';
const attr = 'Maps © <a href="http://www.thunderforest.com">Thunderforest</a>, Data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>';
const mapCenter = [36.499608, -106.274313];
const mapZoom = 10;
const testIcon = L.icon({
    iconUrl: 'marker.png'
});

class RouteMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            route: null,
            position: [37.018936, -106.449043],
            time: ''
        };
    }

    componentDidMount() {
        // const leafletMap = this.leafletMap.leafletElement;

        const dom = (new DOMParser()).parseFromString(feed, 'text/xml');
        const route = tj.kml(dom);

        console.log(route);

        this.setState({
            route: route,
            // position: [route.features[146].properties.Latitude, route.features[146].properties.Longitude],
            time: route.features[146].properties.Time
        });

        // omnivore.kml.parse(feed).addTo(leafletMap);
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
                        attribution={attr}
                        url={tiles}
                    />
                    { this.state.route &&
                        <Marker
                            position={this.state.position}
                            icon={testIcon}
                        >
                            {/* <Popup>
                                <span>{this.state.time}</span>
                            </Popup> */}
                        </Marker>
                    }
                </Map>
            </div>
        );
    }
}

export default RouteMap;
