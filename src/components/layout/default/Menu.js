import React from 'react';
import {
    Text,
    ScrollView,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
} from 'react-native';

import I18n from '../../../I18n';
import { Presets, Spacing, Colors } from '../../../styles';
import { Actions } from 'react-native-router-flux';

export default function Menu() {
    return (
        <ScrollView contentContainerStyle={Presets.fullScreen}>
            <TouchableHighlight onPress={() => Actions.Settings()}>
                <View style={styles.menuItem}>
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/icons/gear.png')}
                    />
                    <Text style={styles.menuItemText}>
                        {I18n.t('settings')}
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.Home()}>
                <View style={styles.menuItem}>
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/icons/home.png')}
                    />
                    <Text style={styles.menuItemText}>
                        {I18n.t('home_page')}
                    </Text>
                </View>
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
    icon: {
        width: 20,
        height: 20,
        marginRight: Spacing.large,
    },
});
