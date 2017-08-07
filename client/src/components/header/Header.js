import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from 'semantic-ui-react';

const Header = ({children}) =>
    <Container fluid style={style.background}>
        <span style={style.headerText}>{children}</span>
        {/* <Button style={style.button}>Login</Button> */}
    </Container>;

Header.propTypes = {
    children: PropTypes.string.isRequired
};

const style = {
    headerText: {
        fontSize: '50px',
        fontWeight: '600',
        paddingLeft: '30px',
        paddingTop: '32px',
        display: 'inline-block',
        color: 'rgb(174,245,42)'
    },
    button: {
        float: 'right',
        margin: '15px',
        backgroundColor: 'rgb(174,245,42)'
    },
    background: {
        backgroundColor: 'rgb(47,47,69)',
        height: '60px'
    }
};

export default Header;
