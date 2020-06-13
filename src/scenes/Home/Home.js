import React from 'react';
import { View, Text } from 'react-native';
import { Presets } from '../../styles';
import Layout from '../../components/layout/default/Layout';

export default function Home() {
    return (
        <Layout>
            <View style={Presets.fullScreen}>
                <Text>Home Page</Text>
            </View>
        </Layout>
    );
}
