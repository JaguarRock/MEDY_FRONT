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
                    <Card style={styles.todayCardContainer}><Text style={styles.todayCardText}>감기</Text></Card>
                    <Card style={styles.todayCardContainer}><Text style={styles.todayCardText}>감기</Text></Card>
                    <Card style={styles.todayCardContainer}><Text style={styles.todayCardText}>감기</Text></Card>
                    <Card style={styles.todayCardContainer}><Text style={styles.todayCardText}>감기</Text></Card>
                    <Card style={styles.todayCardContainer}><Text style={styles.todayCardText}>감기</Text></Card>
                    <Card style={styles.todayCardContainer}><Text style={styles.todayCardText}>감기</Text></Card>
                </ScrollView>
                <Text style={styles.recentMedi}>최근 먹었던 약</Text>
                <View style={styles.square}></View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card style={styles.recentCardContainer}><Text style={styles.recentCardText}>감기</Text></Card>
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
        backgroundColor: 'rgba(255, 90, 95, 0.9)'
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
    },
    recentCardText: {
        fontSize: 20,
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
    }
})