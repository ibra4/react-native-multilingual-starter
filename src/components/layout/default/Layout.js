import React, { useEffect, useState } from 'react';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import { View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Header from './Header';

import { Presets } from '../../../styles';

import I18n from '../../../I18n';

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const direction = I18n.locale === 'ar' ? 'right' : 'left';

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <SideMenu
            menuPosition={direction}
            menu={<Menu />}
            isOpen={isOpen}
            onChange={isOpen => setIsOpen(isOpen)}>
            <SafeAreaView>
                <View style={Presets.fullScreen}>
                    <StatusBar hidden={true} />
                    <Header toggleMenu={toggleMenu} />
                    <View>{children}</View>
                </View>
            </SafeAreaView>
        </SideMenu>
    );
}

const style = StyleSheet.create({
    w100: {
        width: '100%',
    },
});
