import React, { Component } from 'react';

import { getInreach } from '../../api/api';
import '../../Leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import MapKey from './MapKey';
import RouteMap from './RouteMap';
import LoginModal from './LoginModal';
import mapConfig from './mapConfig';

class Map extends Component {

    constructor(props) {
        super(props);

        this.state = {
            liveRoute: [],
            liveStarts: [],
            liveLocation: [],
            modalOpen: false,
            password: '',
            getInreachFail: false,
            submitButtonVisible: true,
            getInreachLoading: false,
            bounds: mapConfig.bounds,
            zoomState: 'overview'
        };
    }

    handleSubmitLogin = () => {

        this.setState({
            getInreachLoading: true
        });

        getInreach(this.state.password)
            .then((res) => {
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
                    liveStarts: trackStarts,
                    liveLocation: findLocation(res.features),
                    modalOpen: false,
                    submitButtonVisible: false
                });
            })
            .catch((error) => {
                this.setState({
                    getInreachFail: true,
                    password: '',
                    getInreachLoading: false
                });
                console.warn(error);
            });
    }

    handleOpenModal = (event) => this.setState({ modalOpen: true })
    handleCloseModal = (event) => this.setState({ modalOpen: false })

    handlePasswordChange = (event, {value}) => {
        this.setState({password: value})
    }

    handleLocationClick = () => {
        const newLocation = calcBounds(this.state.liveLocation[0], mapConfig.locationZoomFactor)
        this.setState({
            bounds: newLocation,
            zoomState: 'location'
         });
    }

    handleOverviewClick = () =>
        this.setState({
            bounds: mapConfig.bounds,
            zoomState: 'overview'
        });

    render() {
        const {
            liveRoute,
            liveStarts,
            liveLocation,
            modalOpen,
            password,
            submitButtonVisible,
            getInreachFail,
            getInreachLoading,
            bounds,
            zoomState
        } = this.state;

        return (
            <div>
                <RouteMap
                    liveRoute={liveRoute}
                    liveStarts={liveStarts}
                    liveLocation={liveLocation}
                    handleLocationClick={this.handleLocationClick}
                    handleOverviewClick={this.handleOverviewClick}
                    bounds={bounds}
                    zoomState={zoomState}
                />
                <MapKey
                    openModal={this.handleOpenModal}
                    submitButtonVisible={submitButtonVisible}
                />
                <LoginModal
                    modalOpen={modalOpen}
                    closeModal={this.handleCloseModal}
                    submitLogin={this.handleSubmitLogin}
                    passwordChange={this.handlePasswordChange}
                    password={password}
                    getInreachFail={getInreachFail}
                    getInreachLoading={getInreachLoading}
                />
            </div>
        );
    }
}

export default Map;

const findLocation = (locations) => {
    const points = locations.filter((item) => item.geometry.type === 'Point');
    const last = points[points.length - 1];

    return [[Number(last.properties.Latitude), Number(last.properties.Longitude), last.properties.Time]];

}

const calcBounds = ([lat, lng], factor) => [ [lat+factor, lng+factor], [lat+factor, lng-factor], [lat-factor, lng-factor], [lat-factor, lng+factor] ]
