import React from 'react';
import { View, Text } from 'react-native';
import { Presets } from '../../styles';
import Layout from '../../components/layout/default/Layout';

import I18n from '../../I18n'

export default function Home() {
    return (
        <Layout>
            <View style={Presets.fullScreen}>
                <Text>{I18n.t("home_page")}</Text>
            </View>
        </Layout>
    );
}
