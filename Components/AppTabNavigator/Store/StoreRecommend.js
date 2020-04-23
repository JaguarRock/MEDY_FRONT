import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import DizzyTab from './DizzyTab';
import EyeTab from './EyeTab';
import KneeCold from './KneeCold';
import RecommendU from './RecommendU';

export default class StoreType extends Component {
    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => (
                    <ScrollableTabBar
                        style={styles.scrollStyle}
                        tabStyle={styles.tabStyle}
                    />
                )}
                tabBarTextStyle={styles.tabBarTextStyle}
                tabBarUnderlineStyle={styles.underlineStyle}
                initialPage={4}
            >
                <View tabLabel={'졸릴 때'}><DizzyTab/></View>
                <View tabLabel={'눈이 침침할 때'}><EyeTab/></View>
                <View tabLabel={'무릎이 시릴 때'}><KneeCold/></View>
                <View tabLabel={'추천'}><RecommendU/></View>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    tabStyle: {},
    scrollStyle: {

    },
    tabBarTextStyle: {
        color: '#484848'
    },
    underlineStyle: {
        height: 3,
        backgroundColor: 'rgba(255, 90, 95, 0.9)',
    },
})