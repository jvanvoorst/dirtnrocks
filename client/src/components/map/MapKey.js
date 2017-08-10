import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from 'semantic-ui-react';

const MapKey = ({openModal, submitButtonVisible}) =>
    <Container fluid style={style.container}>
        { submitButtonVisible &&
            <Button
                style={style.button}
                onClick={openModal}
            >
                Login
            </Button>
        }
        <Container>
            <p style={style.text}>I am Kristie Van Voorst and this is my website created to track my ride on the Colorado Trail.
                The purple line is the Colorado Trail (the CT). This is the hiker’s trail in its entirety so there will be several
                places where I will have to divert around wilderness areas where bicycles aren’t allowed. Don’t be alarmed if
                you see me off course. Each day as I track my ride a blue line will follow me. My current location is the light
                blue marker. The purple markers are my previous night’s camp. </p>
        </Container>
    </Container>;

const style = {
    container: {
        backgroundColor: 'rgb(47,47,69)',
        marginTop: '6px'
    },
    text: {
        paddingTop: '10px',
        paddingBottom: '10px',
        color: 'rgb(211,216,220)',
        fontSize: '18px'
    },
    button: {
        float: 'right',
        margin: '15px',
        backgroundColor: 'rgb(174,245,42)'
    }
};

MapKey.propTypes = {
    openModal: PropTypes.func.isRequired,
    submitButtonVisible: PropTypes.bool.isRequired
};

export default MapKey;
