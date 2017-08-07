import React, { Component } from 'react';

import { getInreach } from '../../api/api';
import {Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import mapConfig from './mapConfig';
import L from 'leaflet';

class RouteMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            liveRoute: null,
            liveStarts: null
        };
    }

    componentDidMount() {


        getInreach().then((res) => {
            console.log(res);

            const track = res.features
                .filter((item) => item.properties.description === 'Kristie Van Voorst\'s track log')[0]
                .geometry.coordinates
                .reduce((acc, [long, lat]) => {
                    acc.push([lat, long]);
                    return acc;
                }, []);

            const trackStarts = res.features
                .filter((item) => item.properties.Event === 'Tracking turned on from device.')
                .reduce((acc, item) => {
                    acc.push([Number(item.properties.Latitude), Number(item.properties.Longitude), item.properties.Time]);
                    return acc;
                }, []);


            this.setState({
                liveRoute: track,
                liveStarts: trackStarts
            });
        });

    }

    render() {
        const {
            liveRoute,
            liveStarts
        } = this.state;

        return (
            <div>
                <Map
                    ref={m => {this.leafletMap = m;}}
                    center={mapConfig.center}
                    zoom={mapConfig.zoom}
                    scrollWheelZoom={false}
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
                    {/* Live track */}
                    { liveRoute &&
                        <Polyline
                            color='blue'
                            positions={liveRoute}
                        />
                    }
                    {/* Live point where tracking is started ie camp */}
                    { liveStarts &&
                        liveStarts.map((item) =>
                            <Marker
                                key={item[0]}
                                position={[item[0], item[1]]}
                            >
                                <Popup>
                                    <span>{[item[2]]}</span>
                                </Popup>
                            </Marker>
                        )
                    }
                </Map>
            </div>
        );
    }
}

export default RouteMap;
