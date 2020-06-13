import React from 'react';
import { Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';

import I18n from '../../../I18n';
import { Presets, Spacing, Colors } from '../../../styles';
import { Actions } from 'react-native-router-flux';

export default function Menu() {
    return (
        <ScrollView contentContainerStyle={Presets.fullScreen}>
            <TouchableHighlight
                style={styles.menuItem}
                onPress={() => Actions.Settings()}>
                <Text style={styles.menuItemText}>{I18n.t('settings')}</Text>
            </TouchableHighlight>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    menuItem: {
        paddingLeft: Spacing.xlarge,
        justifyContent: 'center',
        height: 80,
        backgroundColor: Colors.blue,
    },
    menuItemText: {
        fontSize: 20,
        color: Colors.lightBlue,
        textShadowRadius: 1,
        textShadowOffset: {
            width: 0.5,
            height: 0.5,
        },
    },
});
