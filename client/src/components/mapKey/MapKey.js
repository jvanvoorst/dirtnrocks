import React from 'react';

import { Container, Button } from 'semantic-ui-react';

const MapKey = ({changeLog}) =>
    <Container fluid style={style.container}>
        <Button
            style={style.button}
            onClick={changeLog}
        >Login</Button>
        <Container>
            <p style={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

export default MapKey;
