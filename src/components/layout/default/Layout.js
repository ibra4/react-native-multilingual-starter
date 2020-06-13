import React, { useEffect, useState } from 'react';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import { View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Header from './Header';

import { Presets } from '../../../styles';

import I18n from '../../../I18n';

export default function Layout({ children }) {
    const [menuPosition, setMenuPosition] = useState(null);

    const direction = I18n.locale === 'ar' ? 'right' : 'left';

    return (
        <SideMenu menuPosition={direction} menu={<Menu />} isOpen={false}>
            <SafeAreaView>
                <View style={Presets.fullScreen}>
                    <StatusBar hidden={true} />
                    <Header />
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
