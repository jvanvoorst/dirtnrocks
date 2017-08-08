import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Header, Icon, Modal, Input } from 'semantic-ui-react';


class LoginModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        };
    }

    render() {

        const {
            modalOpen,
            closeModal,
            submitLogin,
            passwordChange,
            password
        } = this.props;

        return (
            <Modal
                open={modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Header icon='browser' content='Cookies policy' />
                <Modal.Content>
                    <h3>{`By logging in you will be able to see Kristie${String.fromCharCode(39)}s live location and track`}</h3>
                    <Input
                        placeholder='password'
                        type='password'
                        value={password}
                        onChange={passwordChange}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button color='blue' onClick={submitLogin} inverted>
                        <Icon name='checkmark' />
                        Submit
                    </Button>
                    <Button color='red' onClick={closeModal} inverted>
                        <Icon name='x' />
                        Cancel
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

LoginModal.propTypes = {
    modalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    submitLogin: PropTypes.func.isRequired,
    passwordChange: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired
};

export default LoginModal;
