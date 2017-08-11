import React from 'react';

import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MapZoomControl = ({handleLocationClick, handleOverviewClick, zoomState}) => {
    if (zoomState === 'overview') {
        return <Button onClick={handleLocationClick} style={style.controlButton}>Zoom to Location</Button>;
    } else if (zoomState === 'location') {
        return <Button onClick={handleOverviewClick} style={style.controlButton}>Zoom to Overview</Button>;
    }
};

MapZoomControl.propTypes = {
    handleLocationClick: PropTypes.func.isRequired,
    handleOverviewClick: PropTypes.func.isRequired,
    zoomState: PropTypes.string.isRequired,
};

export default MapZoomControl;

const style= {
    controlButton: {
        backgroundColor: 'white',
        color: 'black',

    }
};
