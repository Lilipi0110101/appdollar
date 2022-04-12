import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

var [Real, setTotalReal] = useState('');
var [Dollar, setTotalDollar] = useState('');
var [cotacao, setCotacao] = useState('');

function CalcularTotal(){

Dollar = parseFloat(Real) / parseFloat(cotacao);

alert("Total de US$" + Dollar.toFixed(2) + " convertido");

 }
  return (
    <View style={styles.container}>


      <Text style={styles.titulo}>Convertendo R$ em US$!</Text>

      <TextInput style={styles.campoCotacao} placeholder= "Insira a cotação do dólar:" 
      keyboardType="numeric"
      onChangeText={(cotacao) => setCotacao(cotacao)}/>

      <TextInput style={styles.campoInvestimento} placeholder= "R$ em US$?" 
      keyboardType="numeric"
      onChangeText={(Real) => setTotalReal(Real)}
      />
  
      <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>

      <Text style={styles.textoBotao}>
      Resposta 
      </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor:"#f1f1",
},


titulo:{
  fontSize: 30,
  textAlign: 'center', 
  color: '#000',
  fontWeight: 'bold', 
},

campoCotacao:{
  fontSize: 20,
  textAlign: 'center',
  marginTop: 30,
  backgroundColor: '#ffffff', 
  borderRadius: 10,
  padding: 15,
  color: '#0800ff',
  margin: 30,
},

campoInvestimento:{
  fontSize: 20,
  textAlign: 'center',
  marginTop: 5,
  backgroundColor: '#ffffff', 
  borderRadius: 10,
  padding: 15,
  color: '#0800ff',
  marginLeft: 30,
  marginRight: 30,
},

botao:{
  fontSize: 20,
  textAlign: 'center',
  marginTop: 30,
  backgroundColor: '#000', 
  borderRadius: 9,
  padding: 10,
  margin: 100,
},

textoBotao:{
  fontSize: 18,
  textAlign: 'center',
  color: '#fff',
},

});