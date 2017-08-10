import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

const Header = ({children}) =>
    <Container fluid style={style.background}>
        <span style={style.headerText}>{children}</span>
    </Container>;

Header.propTypes = {
    children: PropTypes.string.isRequired
};

const style = {
    headerText: {
        fontSize: '50px',
        fontWeight: '600',
        paddingLeft: window.innerWidth <= 768 ? '' : '30px',
        paddingTop: '32px',
        display: 'inline-block',
        color: 'rgb(174,245,42)'
    },
    background: {
        backgroundColor: 'rgb(47,47,69)',
        height: '60px',
        marginBottom: '6px'
    }
};

export default Header;
