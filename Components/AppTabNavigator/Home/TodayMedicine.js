import React, { Component, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Image,
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import { Card } from 'native-base';

export default class Categories extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text style={{
                    fontSize: 18,
                    paddingHorizontal: 20,
                    color: '#484848'
                }}>오늘의 약</Text>
                {/* <Text style={{
                    fontSize: 18,
                    color: '#484848',
                   
                }}>더 보기</Text> */}
                <View style={styles.square}></View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                >
                    <Card style={styles.todayCardContainer}>
                        <Text style={styles.todayCardText}>감기</Text>
                        <Text style={styles.leftTimeText}>남은 시간</Text>
                        <Text style={styles.leftTime}>00 : 00: 00</Text>
                    </Card>
                    <Card style={styles.todayCardContainer}><Text style={styles.todayCardText}>감기</Text>
                        <Text style={styles.leftTimeText}>남은 시간</Text>
                        <Text style={styles.leftTime}>00 : 00: 00</Text></Card>
                    <Card style={styles.todayCardContainer}><Text style={styles.todayCardText}>감기</Text>
                        <Text style={styles.leftTimeText}>남은 시간</Text>
                        <Text style={styles.leftTime}>00 : 00: 00</Text></Card>
                    <Card style={styles.todayCardContainer}><Text style={styles.todayCardText}>감기</Text>
                        <Text style={styles.leftTimeText}>남은 시간</Text>
                        <Text style={styles.leftTime}>00 : 00: 00</Text></Card>
                    <Card style={styles.todayCardContainer}><Text style={styles.todayCardText}>감기</Text>
                        <Text style={styles.leftTimeText}>남은 시간</Text>
                        <Text style={styles.leftTime}>00 : 00: 00</Text></Card>
                    <Card style={styles.todayCardContainer}><Text style={styles.todayCardText}>감기</Text>
                        <Text style={styles.leftTimeText}>남은 시간</Text>
                        <Text style={styles.leftTime}>00 : 00: 00</Text></Card>
                </ScrollView>
                <Text style={styles.recentMedi}>최근 먹었던 약</Text>
                <View style={styles.square}></View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card style={styles.recentCardContainer}>
                        <Text style={styles.recentCardText}>감기</Text>
                        <Text style={styles.recentDate}>2019 / 03 / 05</Text>
                    </Card>
                    <Card style={styles.recentCardContainer}><Text style={styles.recentCardText}>감기</Text></Card>
                    <Card style={styles.recentCardContainer}><Text style={styles.recentCardText}>감기</Text></Card>
                    <Card style={styles.recentCardContainer}><Text style={styles.recentCardText}>감기</Text></Card>
                    <Card style={styles.recentCardContainer}><Text style={styles.recentCardText}>감기</Text></Card>
                </ScrollView>

            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    square: {
        width: 160,
        height: 3,
        marginLeft: 20,
        backgroundColor: 'rgba(255, 90, 95, 0.9)',
        marginTop: 3
    },
    todayScroll: {
        marginTop: 19,
        marginLeft: 20,
        backgroundColor: '#FFFFFF'
    },
    recentMedi: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 20,
        marginLeft: 20,
        color: '#484848'
    },
    todayCardText: {
        fontSize: 50,
        textAlign: 'center',
        marginTop: 60
    },
    leftTimeText: {
        fontSize: 20,
        marginTop: 40,
        textAlign: 'center'
    },
    leftTime: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
    },
    recentCardText: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20
    },
    recentDate: {
        marginTop: 25,
        marginLeft: 20,
    },
    todayCardContainer: {
        width: 175,
        height: 245,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        marginLeft: 20,
        marginTop: 19,
    },
    recentCardContainer: {
        width: 175,
        height: 70,
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    }
})