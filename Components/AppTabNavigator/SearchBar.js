import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'native-base';

export default class SearchBar extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.searchContainer}>
                    <Icon name='ios-search' size={20} 
                    style={styles.searchIcon}/>
                    <TextInput 
                        placeholder="약을 검색하세요" 
                        style={styles.textInput}
                    />
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 80,
    },
    searchContainer: {
        display: 'flex',
        borderWidth: 0,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.7,
        shadowRadius: 10,
        borderRadius: 24,
        height: 41,
        marginLeft: 20,
        marginRight: 20,
    },
    searchIcon: {
        position: 'absolute',
        left: 10,
        top: 6.5,
    },
    textInput: {
        display: 'flex',
        marginTop: 6,
        marginLeft: 40,
        color: '#919191',
    }
});