import React, { Component } from 'react';

import Header from './header/Header';
import RouteMap from './map/RouteMap';
import MapKey from './mapKey/MapKey';
import Blog from './blog/Blog';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        };

        this.changeLog = this.changeLog.bind(this);
    }

    changeLog() {
        this.setState({
            loggedIn: !this.state.loggedIn
        });
    }

    render() {
        return (
            <div>
                <Header>DirtN.Rocks</Header>
                <RouteMap />
                <MapKey
                    changeLog={this.changeLog}
                />
                <Blog loggedIn={this.state.loggedIn}/>
            </div>
        );
    }
}

export default App;
