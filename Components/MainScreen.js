import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base';

import HomeTab from './AppTabNavigator/Home/HomeTab';
import HistoryTab from './AppTabNavigator/History/HistoryTab';
import AddMedicineTab from './AppTabNavigator/AddMedicine/AddMedicineTab';
import StoreTab from './AppTabNavigator/Store/StoreTab';
import MyProfileTab from './AppTabNavigator/MyProfile/MyProfileTab';

const AppTabNavigator = createBottomTabNavigator({
    HomeTab: { screen: HomeTab },
    HistoryTab: { screen: HistoryTab },
    AddMedicineTab: { screen: AddMedicineTab },
    StoreTab: { screen: StoreTab },
    MyProfileTab: { screen: MyProfileTab }
}, {
    tabBarOptions: {
        activeTintColor: 'rgba(255, 90, 95, 0.9)',
        inactiveTintColor: 'grey',
        showLabel: false
    }
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
    render() {
        return (
            <AppTabContainet />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});