import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { Icon } from 'native-base';

export default class MedicineHistory extends Component {
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
            initialPage={2}
            >
                <View key={'1'} tabLabel={'리스트'}></View>
                <View key={'2'} tabLabel={'캘린더'}></View>
            </ScrollableTabView>
        );
    }
}; //아이콘 + 텍스트 추가

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