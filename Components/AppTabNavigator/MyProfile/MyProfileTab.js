import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class MyProfileTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='person' style={{ color: tintColor }}/>
        )
    }

    render() {
        return (
            <View style={style.wrapper}>
                <Text>MyProfileTab</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
});