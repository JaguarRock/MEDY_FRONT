import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CardView = ({ data }) => (
    <View style={styles.cardContainer}>
        <Image></Image>
        <Text style={styles.cardTitle}>1</Text>
        <Text style={styles.cardContent}>감기</Text>
    </View>
);

const styles = StyleSheet.create({
    cardContainer: {
        width: 175,
        height: 245,
        borderRadius: 4
    },
    cardTitle: {

    },
    cardContent: {

    },
});

export default CardView;