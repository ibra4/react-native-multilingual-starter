/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Text, AsyncStorage } from 'react-native';

import I18n from './src/I18n/index';
import Layout from './src/components/layout/default/Layout';

import Settings from './src/scenes/Settings';
import Router from './src/Router';

import 'react-native-gesture-handler';

const App: () => React$Node = () => {
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        async function getLocaleFromStorage() {
            const locale = await AsyncStorage.getItem('default_lang');
            if (locale) {
                console.warn('start : ', locale);
                I18n.locale = locale;
            } else {
                I18n.locale = I18n.locale.substring(0, 2);
                setStatus('missing_lang');
            }
            setStatus('success');
        }
        getLocaleFromStorage();
    }, []);

    const renderTemplate = () => {
        switch (status) {
            case 'success':
                return <Router />;
            case 'missing_lang':
                return <Settings init={true} />;
            case 'loading':
                return <Text>Loading ...</Text>;
        }
    };

    return renderTemplate();
};

export default App;
