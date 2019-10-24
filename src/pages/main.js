import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, View, FlatList, Text, Image, TextInput } from 'react-native'
import md5 from 'js-md5'

const publicKey = 'e39129ffea4355dfde00740abcb1766b';
const privatKey = 'ff64cfb9de7914cd99ec63b8f4c2873ad6ee8f36';

export default class Main extends Component{
    state = {
        text: '',
    }
    
    static navigationOptions = {
        title: "BUSCA MARVEL TESTE FRONTEND",
        headerStyle: {
            backgroundColor: '#FFF',
          },
          headerTintColor: '#D90000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    };

    componentDidMount() {
        this.loadCharacters();
    }
    
    loadCharacters = async() => {
        
        const ts = moment();
        const hash = md5.str_md5(ts+privatKey+publicKey);
        const res = await api.get('/v1/public/characters?ts=1&apikey=e39129ffea4355dfde00740abcb1766b&hash=5c7ad4393c645610c67a5bf17efcf0d8');
        const chars = res.data;
        console.log(chars);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.label}>
                NOME DO PERSONAGEM
                </Text>
                <TextInput
                style={{ 
                    borderRadius:5, 
                    borderColor:"#cecece", 
                    height: 40, 
                    borderWidth: 1, 
                    width: 310,
                    marginLeft:30,
                    color: "#909090"
                }}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                />
                <View style={styles.barraTituloLista}>
                    <Text style={styles.tituloBarra}>Nome</Text>
                </View>
                <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: "center",
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    label: {
        fontSize:10,
        marginLeft:30,
        marginTop: 12,
        color: "#d90000",
    },
    barraTituloLista:{
        backgroundColor: "#d90000",
        color: "#ffffff",
        marginTop: 12,
        marginBottom: 12
    },
    tituloBarra: {
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 40,
        marginLeft: 120
    }

  })