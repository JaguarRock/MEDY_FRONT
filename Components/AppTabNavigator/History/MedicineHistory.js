import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { Icon } from 'native-base';
import MedicineList from './MedicineList';
import MedicineCalendar from './MedicineCalendar';

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
                <View tabLabel={'리스트'}><MedicineList/></View>
                <View tabLabel={'캘린더'}><MedicineCalendar/></View>
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