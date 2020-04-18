import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import SearchBar from '../SearchBar';
import AddMedicine from './AddMedicine';

export default class AddMedicineTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-add-circle' style={{ color: tintColor }}/>
        )
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.tabName}>
                    <Text style={styles.title}>
                        ADD MEDICINE
                    </Text>
                </View>
                <View>
                    <AddMedicine/>
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
        height: '8%',
        flexDirection: 'row'
    },
    title: {
        position: 'absolute',
        fontSize: 25,
        fontWeight: '500',
        lineHeight: 24,
        fontStyle: 'normal',
        color: '#445544'
    },
    searchBar: {
        height: '10%'
    },
    qrcode: {
        marginRight: 20,
        marginLeft: 340
    }
});