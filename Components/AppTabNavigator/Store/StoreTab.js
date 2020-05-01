import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, CheckBox } from 'react-native';
import { Icon } from 'native-base';
import StoreRecommend from './StoreRecommend';
import SearchBar from '../SearchBar';
import NutrList from './NutrList'


export default class StoreTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-cart' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.tabName}>
                    <Text style={styles.title}>
                        S T O R E
                    </Text>
                </View>
                <View style={styles.storeRecommend}>
                    <StoreRecommend />
                </View>
                <View style={styles.searchBar}>
                    <SearchBar />
                </View>
                <View style={styles.nutrList}>
                    <NutrList/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fcfcfc'
    },
    tabName: {
        marginTop: 80,
        marginLeft: 20,
        height: '8%'
    },
    title: {
        position: 'absolute',
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 24,
        fontStyle: 'normal',
        color: '#445544'
    },
    storeRecommend: {
        flex: 2
    },
    searchBar: {
        flex: 0.4,
    },
    nutrList: {
        flex: 1
    }
});