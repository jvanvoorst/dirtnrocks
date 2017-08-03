import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from 'semantic-ui-react';
import Menubar from './Menubar';

const Header = ({children}) =>
    <Container fluid>
        <h1 style={style.headerText}>{children}</h1>
        <Button style={style.button}>Login</Button>
    </Container>;

Header.propTypes = {
    children: PropTypes.string.isRequired
};

const style = {
    headerText: {
        fontSize: '30px',
        paddingLeft: '30px',
        paddingTop: '12px',
        display: 'inline-block'
    },
    button: {
        float: 'right',
        margin: '15px'
    }
};

export default Header;
