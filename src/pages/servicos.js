import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Servicos extends Component {
    static navigationOptions = {
        title: 'Serviços'
    }; 

    render() {
        return(
            <View>
                <Text>Serviços</Text>
            </View>
        );
    }
}