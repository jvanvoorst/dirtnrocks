import React from 'react';

import Header from './header/Header';
import RouteMap from './map/RouteMap';
import Blog from './blog/Blog';

const App = () =>
    <div>
        <Header>DirtN.Rocks</Header>
        <RouteMap />
        <Blog/>
    </div>;

export default App;
