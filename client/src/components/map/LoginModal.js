import React from 'react';
import PropTypes from 'prop-types';

import { Button, Header, Icon, Modal, Input, Loader, Dimmer } from 'semantic-ui-react';

const LoginModal = ({
    modalOpen,
    closeModal,
    submitLogin,
    passwordChange,
    password,
    getInreachFail,
    getInreachLoading}) =>
        <Modal
            open={modalOpen}
            onClose={this.handleClose}
            basic
            size='small'
        >
            <Header icon='browser' content='Login' />
            <Modal.Content>
                { getInreachLoading &&
                    <Dimmer active>
                        <Loader content='Loading' />
                    </Dimmer>
                }
                <h3>{`By logging in you will be able to see Kristie${String.fromCharCode(39)}s live location and track`}</h3>
                { getInreachFail &&
                    <p style={style.passwordError}>Incorrect password</p>
                }
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
        </Modal>;

LoginModal.propTypes = {
    modalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    submitLogin: PropTypes.func.isRequired,
    passwordChange: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    getInreachFail: PropTypes.bool.isRequired,
    getInreachLoading: PropTypes.bool.isRequired
};

const style = {
    passwordError: {
        color: 'red'
    }
};

export default LoginModal;
