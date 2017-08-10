import React from 'react';
import PropTypes from 'prop-types';

import {Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import mapConfig from './mapConfig';
import '../../Leaflet.awesome-markers/dist/leaflet.awesome-markers.css';

const RouteMap = ({liveRoute, liveStarts, liveLocation}) =>
    <Map
        ref={m => {this.leafletMap = m;}}
        bounds={mapConfig.bounds}
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
        {/* start and end point markers */}
        <Marker
            position={mapConfig.markers.start}
            icon={mapConfig.icons.start}
        />
        <Marker
            position={mapConfig.markers.end}
            icon={mapConfig.icons.end}
        />
        {/* Live track */}
        { liveRoute &&
            <Polyline
                color='blue'
                positions={liveRoute}
            />
        }
        {/* Live location */}
        { liveLocation &&
            liveLocation.map((item) =>
                <Marker
                    key={item[2]}
                    position={[item[0], item[1]]}
                    icon={mapConfig.icons.location}
                >
                    <Popup>
                        <span>{item[2]}</span>
                    </Popup>
                </Marker>
            )
        }
        {/* Live point where tracking is started ie camp */}
        { liveStarts &&
            liveStarts.map((item) =>
                <Marker
                    key={item[0]}
                    position={[item[0], item[1]]}
                    icon={mapConfig.icons.camp}
                    >
                        <Popup>
                            <span>{[item[2]]}</span>
                        </Popup>
                    </Marker>
                )
        }
    </Map>;

RouteMap.propTypes = {
    liveRoute: PropTypes.array.isRequired,
    liveStarts: PropTypes.array.isRequired,
    liveLocation: PropTypes.array.isRequired
};

export default RouteMap;
