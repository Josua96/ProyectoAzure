import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import axios from 'axios';
import { DocumentPicker, FileSystem } from 'expo';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      petition:'',
      totalPetitions:171,      
      failedPetitions:0,      
      petitionsAttended:0,
      data:null
    }
  }

  sendRequest(){
    axios.post('https://apitaskso.azurewebsites.net/api/HttpTrigger1?code=NvAazVaa73a47rHdYTa3taI3VLj1j8uMW0IgO1DiMmkPWhfza78uBw==&message='
    +this.state.petition).then(result=>{
      if(result.data.status==true){
        this.setState({petitionsAttended:(this.state.petitionsAttended)+1});
      }else{
        this.setState({failedPetitions:(this.state.failedPetitions)+1});
      }
    }).catch(error=>{
      alert("Conexion error");
    })
  }

  readFile = async () =>  {
    let result = await DocumentPicker.getDocumentAsync({});
    FileSystem.readAsStringAsync(result.uri)
      .then(r => {
        this.setState({data:r.split('\n')});
        for(i=0;i<171;i++){
          this.setState({petition:(this.state.data[i])})
          this.sendRequest();
        }
      })
      .catch(error => {
        console.error(error);
      });        
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texts}>Total de peticiones: {this.state.totalPetitions}</Text>
        <Text style={styles.texts}>Peticiones atendidas: {this.state.petitionsAttended}</Text>
        <Text style={styles.texts}>Peticiones fallidas: {this.state.failedPetitions}</Text>
        <Button title="Iniciar" color="black" onPress={()=>this.readFile()}></Button>
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
