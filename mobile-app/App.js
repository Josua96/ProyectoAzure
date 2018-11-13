import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      peticion:'',
      totalPeticiones:7,
      peticionesEnviadas:0,
      peticionesAtendidas:0
    }
  }

  changeText(){
    this.setState({
      peticionesAtendidas:(this.state.peticionesAtendidas)+1,
      peticionesEnviadas:(this.state.peticionesEnviadas)+1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texts}>Total de peticiones: {this.state.totalPeticiones}</Text>
        <Text style={styles.texts}>Peticiones enviadas: {this.state.peticionesEnviadas}</Text>
        <Text style={styles.texts}>Peticiones atendidas: {this.state.peticionesAtendidas}</Text>
        <Button title="Iniciar" color="black" onPress={()=>this.changeText()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts:{
    marginTop: 5,
    marginBottom: 10,
    fontSize: 25,

  },
});
