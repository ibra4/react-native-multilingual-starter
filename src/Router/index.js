import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Settings from '../scenes/Settings/Settings';
import Home from '../scenes/Home/Home';

export default function index() {
    return (
        <Router>
            <Stack key="root">
                <Scene key="Home" component={Home} hideNavBar />
                <Scene key="Settings" component={Settings} hideNavBar />
            </Stack>
        </Router>
    );
}
