import React, {Component} from 'react';
import {View, Text} from 'react-native';
import api from '../services/api';
import md5 from 'react-native-md5';
import moment from 'moment';

export default class Main extends Component{
    static navigationOptions = {
        title: 'MarvelSearch',
        headerStyle: {backgroundColor: '#d60000'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'}
    };

    componentDidMount() {
        this.loadCharacters();
    }
    
    loadCharacters = async() => {
        const publicKey = 'e39129ffea4355dfde00740abcb1766b';
        const privatKey = 'ff64cfb9de7914cd99ec63b8f4c2873ad6ee8f36';
        const ts = moment();
        const hash = md5.str_md5(ts+privatKey+publicKey);
        const res = await api.get('/v1/public/characters?ts=1&apikey=e39129ffea4355dfde00740abcb1766b&hash=5c7ad4393c645610c67a5bf17efcf0d8');
        const chars = res.data;
        console.log(chars);
    }

    render(){
        return(
            <View>
                <Text>Main Page {this.hash}</Text>
            </View>    
        );
    }
}