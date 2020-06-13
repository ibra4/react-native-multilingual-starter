import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Spacing } from '../../../styles';
import I18n from '../../../I18n';
import { Actions } from 'react-native-router-flux';

export default function Header({ toggleMenu }) {
    return (
        <View style={styles.menu}>
            <TouchableOpacity
                style={styles.barsContainer}
                onPress={() => toggleMenu()}>
                <Text style={styles.bar} />
                <Text style={styles.bar} />
                <Text style={styles.bar} />
            </TouchableOpacity>
            <View>
                <Text style={styles.brand}>BRAND</Text>
            </View>
            <TouchableOpacity style={styles.back} onPress={() => Actions.pop()}>
                {Actions.currentScene != 'Home' && (
                    <Text style={styles.back}>{I18n.t('back')}</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        height: 80,
        backgroundColor: Colors.lightBlue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: Spacing.large,
        paddingLeft: Spacing.large,
    },
    brand: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.blue,
    },
    bar: {
        height: 3,
        width: 30,
        backgroundColor: Colors.blue,
    },
    barsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 20,
    },
    back: {
        color: Colors.blue,
        fontSize: 20,
    },
});
