import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'native-base';

export default class NutrList extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <Card style={styles.nutrContainer}>
                    <Image style={styles.nutrImage} source={require('../../Image/aronamine.jpg')}></Image>
                    <Text style={styles.nutrName}>아로나민C</Text>
                    <Text style={styles.nutrCompany}>일동제약</Text>
                    <Text style={styles.nutrPrice}>₩ 10,000</Text>
                </Card>
                <Card style={styles.nutrContainer}><Text style={styles.todayCardText}>감기</Text>
                    <Text style={styles.leftTimeText}>남은 시간</Text>
                    <Text style={styles.leftTime}>00 : 00: 00</Text></Card>
                <Card style={styles.nutrContainer}><Text style={styles.todayCardText}>감기</Text>
                    <Text style={styles.leftTimeText}>남은 시간</Text>
                    <Text style={styles.leftTime}>00 : 00: 00</Text></Card>
                <Card style={styles.nutrContainer}><Text style={styles.todayCardText}>감기</Text>
                    <Text style={styles.leftTimeText}>남은 시간</Text>
                    <Text style={styles.leftTime}>00 : 00: 00</Text></Card>
                <Card style={styles.nutrContainer}><Text style={styles.todayCardText}>감기</Text>
                    <Text style={styles.leftTimeText}>남은 시간</Text>
                    <Text style={styles.leftTime}>00 : 00: 00</Text></Card>
                <Card style={styles.nutrContainer}><Text style={styles.todayCardText}>감기</Text>
                    <Text style={styles.leftTimeText}>남은 시간</Text>
                    <Text style={styles.leftTime}>00 : 00: 00</Text></Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    nutrContainer: {
        width: 385,
        height: 83,
        borderRadius: 6,
        marginLeft: 15,
        flexDirection: 'row'
    },
    nutrImage: {
        width: 70,
        height: 70,
        marginLeft: 30,
        marginTop: 5
    },
    nutrName: {
        fontSize: 20,
    },
    nutrCompany: {
        fontSize: 10,
        marginTop: 50,
    },
    nutrPrice: {
        marginTop: 50,
    }
})