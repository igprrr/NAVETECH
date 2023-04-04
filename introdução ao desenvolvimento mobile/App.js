import React, {useState} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
const App = () => {
    return(
     <View style={styles.fundo}>
     <Text style={styles.texto}> Sobre </Text> 
     <Image style = {styles.imagem}source = {{uri: 'https://pps.whatsapp.net/v/t61.24694-24/290672767_1045414729668858_510367019583938772_n.jpg?ccb=11-4&oh=01_AVxO09WfeNL4O8GncKGmAIn2Npa2WBJ81NJWBbxdPS0ZiA&oe=63330E12'}}/>
     <Text style={styles.disciplina}>Introdução a desenvolvimento mobile</Text>
     <Text style={styles.aux}>Discente: Igor Melo de Sousa</Text>
     <Text style={styles.aux}>Docente: Ítalo Campos de Melo Silva</Text>
     </View> 
    )
}

    export default App;

     const styles = StyleSheet.create ({
       fundo:{ flex: 1,
            justifyContent: "center",
            alignItems:'center'
                 },
       imagem: {
        width:170,
        height:170,
        resizeMode:'center',
        margin:30,
        borderRadius:500                  
                 },
        texto:{
         fontSize:35,
         fontWeight:'bold',
         color: 'black'
                },   
        disciplina:{
         fontSize:20,
         fontWeight:'bold',
         alignItems:'center',
         marginTop: 80,
         color: 'black'
                 },    
        aux:{
         marginTop:6,
         fontSize:17,
         color:'black'
                 }
})