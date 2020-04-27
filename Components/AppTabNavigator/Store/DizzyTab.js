import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, CardItem } from 'native-base';
import { Avatar } from 'react-native-elements';

export default class DizzyTab extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Card style={styles.todayCardContainer}>
                    <Text style={styles.nutrName}>아로나민C</Text>
                    <Image style={styles.nutrImage} source={require('../../Image/aronamine.jpg')}></Image>
                    <Text style={styles.nutrCompany}>일동제약</Text>
                    <Text style={styles.nutrPrice}>₩ 10,000</Text>
                </Card>
                <Card style={styles.todayCardContainer}>
                    <Text>감기</Text>
                    <Text>남은 시간</Text>
                    <Text>00 : 00: 00</Text></Card>
                <Card style={styles.todayCardContainer}>
                    <Text>감기</Text>
                    <Text>남은 시간</Text>
                    <Text>00 : 00: 00</Text></Card>
                <Card style={styles.todayCardContainer}>
                    <Text>감기</Text>
                    <Text>남은 시간</Text>
                    <Text>00 : 00: 00</Text></Card>
                <Card style={styles.todayCardContainer}>
                    <Text>감기</Text>
                    <Text>남은 시간</Text>
                    <Text>00 : 00: 00</Text></Card>
                <Card style={styles.todayCardContainer}>
                    <Text>감기</Text>
                    <Text>남은 시간</Text>
                    <Text>00 : 00: 00</Text></Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    todayCardContainer: {
        width: 160,
        height: 160,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        marginLeft: 20,
        marginTop: 19,
    },    
    nutrName : {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 5
    },
    nutrCompany : {
        textAlign: 'right',
        marginRight: 5,
        fontSize: 11
    },
    nutrPrice : {
        textAlign: 'right',
        fontSize: 15,
        marginRight: 5
    },
    nutrImage: {
        alignItems: 'center',
        marginLeft: 40,
        width: 80,
        height: 85,
    }
})