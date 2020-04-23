import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'native-base';

export default class EyeTab extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Card style={styles.todayCardContainer}>
                    <Text>감기</Text>
                    <Text>남은 시간</Text>
                    <Text>00 : 00: 00</Text>
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
})