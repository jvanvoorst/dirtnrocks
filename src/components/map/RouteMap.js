import React, { Component } from 'react';

import feed from '../../data/feed';

import {Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import toGEOJSON from 'togeojson';
import mapConfig from './mapConfig';

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
        const route = toGEOJSON.kml(dom);

        console.log(route);

        this.setState({
            route: route,
            // position: [route.features[146].properties.Latitude, route.features[146].properties.Longitude],
            time: route.features[146].properties.Time
        });
    }

    render() {
        return (
            <div>
                <Map
                    ref={m => {this.leafletMap = m;}}
                    center={mapConfig.center}
                    zoom={mapConfig.zoom}
                >
                    <TileLayer
                        attribution={mapConfig.attr}
                        url={mapConfig.tiles}
                    />
                    {/* Colorado trail route */}
                    <Polyline
                        color='purple'
                        positions={mapConfig.routes.ct}
                    />
                    {/* start and end markers */}
                    <Marker
                        position={mapConfig.markers.start}
                    />
                    <Marker
                        position={mapConfig.markers.end}
                    />

                </Map>
            </div>
        );
    }
}

export default RouteMap;
