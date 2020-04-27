import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './Components/MainScreen';

export default class App extends Component {
  render() {
    return(
      <MainScreen/>
      //test
    );
  }
}