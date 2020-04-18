import React, { Component } from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { Card, Icon } from 'native-base';

export default class AddMedicine extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this._addMedicine = this._addMedicine.bind(this);
    }

    componentDidMount() {

    }

    _addMedicine() {

    }

    render() {
        return (
            <View>
                <Card style={styles.container}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>QR CODE</Text>
                        <Icon name='ios-camera' style={styles.camera}></Icon>
                    </View>

                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 385,
        height: 480,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10
    },
    camera: {
    }
})