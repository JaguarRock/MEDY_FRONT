import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import SearchBar from '../SearchBar';

export default class HistoryTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-document' style={{ color: tintColor }}/>
        )
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.tabName}>
                    <Text style={styles.title}>
                        H I S T O R Y
                    </Text>
                </View>
                <View style={styles.searchBar}>
                    <SearchBar/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f5f5f5',
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
    searchBar: {
        height: '10%'
    }
});