import React, { Component } from 'react';

import { getInreach } from '../../api/api';
import '../../Leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import MapKey from './MapKey';
import RouteMap from './RouteMap';
import LoginModal from './LoginModal';

class Map extends Component {

    constructor(props) {
        super(props);

        this.state = {
            liveRoute: [],
            liveStarts: [],
            modalOpen: false,
            password: ''
        };

        this.fetchInreach = this.fetchInreach.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    fetchInreach() {
        console.log(this.state.password);

        getInreach(this.state.password).then((res) => {

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
                modalOpen: false
            });
        });
    }

    handleOpenModal = (event) => this.setState({modalOpen: true})
    handleCloseModal = (event) => this.setState({modalOpen: false})

    handleSubmitLogin = () => this.fetchInreach()
    handlePasswordChange = (event, {value}) => {
        this.setState({password: value})
    }

    render() {
        const {
            liveRoute,
            liveStarts,
            modalOpen,
            password
        } = this.state;

        return (
            <div>
                <RouteMap
                    liveRoute={liveRoute}
                    liveStarts={liveStarts}
                />
                <MapKey
                    openModal={this.handleOpenModal}
                />
                <LoginModal
                    modalOpen={modalOpen}
                    closeModal={this.handleCloseModal}
                    submitLogin={this.handleSubmitLogin}
                    passwordChange={this.handlePasswordChange}
                    password={password}
                />
            </div>
        );
    }
}

export default Map;
