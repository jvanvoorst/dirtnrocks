import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Sidebar, Segment, Button, Menu, } from 'semantic-ui-react';

class Menubar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.toggleVisible = this.toggleVisible.bind(this);
    }

    toggleVisible() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        const { visible } = this.state
        console.log(visible);
        return (
            <div>
                <Button onClick={this.toggleVisible}>Toggle Visible</Button>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical>
                        <Menu.Item name='logon'>
                            Logon
                        </Menu.Item>
                    </Sidebar>
                </Sidebar.Pushable>
            </div>
        );
    }
}

export default Menubar;
