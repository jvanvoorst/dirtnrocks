import React, { Component } from 'react';

import { getInreach } from '../../api/api';
import '../../Leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import MapKey from './MapKey';
import RouteMap from './RouteMap';

class Map extends Component {

    constructor(props) {
        super(props);

        this.state = {
            liveRoute: null,
            liveStarts: null
        };

        this.fetchInreach = this.fetchInreach.bind(this);
    }

    fetchInreach() {
        getInreach().then((res) => {

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
                <RouteMap
                    liveRoute={liveRoute}
                    liveStarts={liveStarts}
                />
                <MapKey
                    fetchInreach={this.fetchInreach}
                />
            </div>
        );
    }
}

export default Map;
