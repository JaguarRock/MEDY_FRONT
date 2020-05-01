import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import { Image } from 'react-native';

export default class MyProfileTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='person' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.tabName}>
                    <Text style={styles.title}>
                        MY PAGE
                    </Text> 
                </View>
                <View style={styles.square}></View>
                <Image source={require('../../Image/Google.png')} style={styles.faceImage}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    tabName: {
        marginTop: 80,
        marginLeft: 20,
        height: '8%',
        flexDirection: 'row',
    },
    title: {
        position: 'absolute',
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 24,
        fontStyle: 'normal',
        color: '#445544'
    },
    faceImage: {
        marginTop: 50,
        width: 153,
        height: 153,
        marginLeft: 105
    },
    square: {
        width: 160,
        height: 3,
        marginLeft: 5,
        backgroundColor: 'rgba(255, 90, 95, 0.9)',
    },
});