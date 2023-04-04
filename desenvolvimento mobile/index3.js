import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import api from '../../Services/Api';

const Cadastro_usuario = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [sexo, setSexo] = useState('M');

function salvar(){
  var dados = new FormData();
  dados.append('login', login);
  dados.append('senha', senha);
  dados.append('nome', nome);
  dados.append('email', email);
  dados.append('celular', celular);
  dados.append('sexo',sexo);
  api.post('/usuario_teste', dados, 
  {headers: {'Content-Type': 'multipart/form-data'},})
    .then(function(response){
      Alert.alert('dados salvos com sucesso');
  })
    .catch(function(error){
      Alert.alert('erro');
    console.log(error.response.data);
  })
}

  return (
    <View style={style.fundo}>
      <Text style={style.h1}>
        ffffffffffffffffffffffffffffffffffffffffff
      </Text>
      
      <TextInput 
        style={style.input}
        placeholder='Login'
        autoCorrect={false}
        value={login}
        onChangeText={(text) => setLogin(text)}
      />
      <TextInput 
        style={style.input}
        placeholder='Senha'
        autoCorrect={false}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <TextInput 
        style={style.input}
        placeholder='Nome'
        autoCorrect={false}
        secureTextEntry={false}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput 
        style={style.input}
        placeholder='E-mail'
        autoCorrect={false}
        autoCapitalize={false}
        keyboardType = 'email-address'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput 
        style={style.input}
        placeholder='Celular'
        autoCorrect={false}
        value={celular}
        keyboardType = 'numeric'
        onChangeText={(text) => setCelular(text)}
      />
      <Picker style = {style.input} 
                        selectedValue = {sexo} 
                        onValueChange = {(itemvalue, itemindex) => setSexo(itemvalue)}>
        <Picker.Item value = 'M' label = 'Masculino'/>
        <Picker.Item value = 'F' label = 'Feminino'/>
      </Picker>

<Button title = 'salvar' onPress={() => salvar()}/>
    </View>
);
}

export default Cadastro_usuario;


const style = StyleSheet.create( {
  fundo: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor:"purple",
  },
  texto: {
    fontSize:30,
    color:"black",
  },
  input: {
    backgroundColor:"white",
    width:280,
    height:43,
    marginTop: 10,
    borderWidth:1,
    borderRadius:7,
    fontSize:20,
    color:'black',
  },
  botao: {
    width:'40%',
    height:50,
    borderRadius:50,
    backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center",
    margin:10,
  },
  textobotao: {
    fontSize:20,
    color:"#FFF",
    fontWeight:"bold",
  },
  h1: {
    fontSize:40,
    fontWeight:"900",
    color: "black",
    margin:40,
  },
})