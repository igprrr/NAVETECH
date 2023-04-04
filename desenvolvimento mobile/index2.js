import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import api from '../../Services/Api';


export default function Lista() {
    const [lista, setLista] = useState();
    
    function atualiza(){
        api.get('/usuario_teste')
        .then(function (response){
           setLista(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    return(
        <View>
            <Button onPress={() => atualiza()}
            title = 'atualizar'/>
          <FlatList
            data = {lista}
            keyExtractor = {item => item.id}
            renderItem = {({item}) => <View  style={style.fundo}>
                                        <Text style = {style.nome}>nome: {item.nome} </Text>
                                        <Text style = {style.celular}>cel: {item.celular}</Text>
                                      </View>
                         }          
            />  
        </View>
    );
}

const style = StyleSheet.create({
    fundo:{
        color: 'black',
        marginTop: 12,
        borderWidth: 1,
        alignItems: 'center'
    },
    
    nome:{
        flex: 1,
        backgroundColor: '#6495ED',
        fontSize: 20,
        marginTop : 6,
        
        
    },

    celular:{
        backgroundColor:''

    }

  
})