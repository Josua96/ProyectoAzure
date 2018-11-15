import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import axios from 'axios';
import FileSystem from 'react-native-filesystem';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      petition:'',
      totalPetitions:171,      
      failedPetitions:0,      
      petitionsAttended:0,
      data:["Pasear al perro,	Paseo por el parque,	0",
            "Pasear al perro,	Paseo por el parque,	1",
            "Pasear al perro,	Paseo por el parque,	2",
            "Pasear al perro,	Paseo por el bosque,	0",
            "Pasear al perro,	Paseo por el bosque,	1",
            "Pasear al perro,	Paseo por el bosque,	2",
            "Pasear al perro,	Paseo en el patio,	0",
            "Pasear al perro,	Paseo en el patio,	1",
            "Pasear al perro,	Paseo en el patio,	2",
            "Pasear al perro,	Paseo en la ciudad,	0",
            "Pasear al perro,	Paseo en la ciudad,	1",
            "Pasear al perro,	Paseo en la ciudad,	2",
            "Pasear al perro,	Paseo alrededor de la pradera,	0",
            "Pasear al perro,	Paseo alrededor de la pradera,	1",
            "Pasear al perro,	Paseo alrededor de la pradera,	2",
            "Pasear al perro,	Paseo con mis hijos,	0",
            "Pasear al perro,	Paseo con mis hijos,	1",
            "Pasear al perro,	Paseo ccn mis hijos,	2",
            "Pasear al perro,	Paseo por la tarde,	0",
            "Pasear al perro,	Paseo por la tarde,	1",
            "Pasear al perro,	Paseo por la tarde,	2",
            "Pasear al gato,	Paseo por el parque,	0",
            "Pasear al gato,	Paseo por el parque,	1",
            "Pasear al gato,	Paseo por el parque,	2",
            "Pasear al gato,	Paseo por el bosque,	0",
            "Pasear al gato,	Paseo por el bosque,	1",
            "Pasear al gato,	Paseo por el bosque,	2",
            "Pasear al gato,	Paseo en el patio,	0",
            "Pasear al gato,	Paseo en el patio,	1",
            "Pasear al gato,	Paseo en el patio,	2",
            "Pasear al gato,	Paseo en la ciudad,	0",
            "Pasear al gato,	Paseo en la ciudad,	1",
            "Pasear al gato,	Paseo en la ciudad,	2",
            "Pasear al gato,	Paseo alrededor de la pradera,	0",
            "Pasear al gato,	Paseo alrededor de la pradera,	1",
            "Pasear al gato,  Paseo alrededor de la pradera,	2",
            "Pasear al gato,	Paseo ccn mis hijos,	0",
            "Pasear al gato,	Paseo ccn mis hijos,	1",
            "Pasear al gato,	Paseo ccn mis hijos,	2",
            "Pasear al gato,	Paseo por la tarde,	0",
            "Pasear al gato,	Paseo por la tarde,	1",
            "Pasear al gato,	Paseo por la tarde,	2",
            "Reparacion del automovil,	Ir al centro de reparaciones Don Carlos,	0",
            "Reparacion del automovil,	Ir al centro de reparaciones Don Carlos,	1",
            "Reparacion del automovil,	Ir al centro de reparaciones Don Carlos,	2",
            "Reparacion de Toyota 2018, 	Ir al centro de reparaciones Don Carlos,	0",
            "Reparacion de Toyota 2018, 	Ir al centro de reparaciones Don Carlos,	1",
            "Reparacion de Toyota 2018, 	Ir al centro de reparaciones Don Carlos,	2",
            "Reparacion de Toyota 2018, 	Ir al centro oficial de la Toyota,	0",
            "Reparacion de Toyota 2018, 	Ir al centro oficial de la Toyota,	1",
            "Reparacion de Toyota 2018, 	Ir al centro oficial de la Toyota,	2",
            "Reparacion de Bici 20,	Ir al taller de motocicletas Montano,	0",
            "Reparacion de Bici 20,	Ir al taller de motocicletas Montano,	1",
            "Reparacion de Bici 20,	Ir al taller de motocicletas Montano,	2",
            "Terminar tercer avance,	Reunion inicial de grupo,	0",
            "Terminar tercer avance,	Reunion inicial de grupo,	1",
            "Terminar tercer avance,	Reunion inicial de grupo,	2",
            "Terminar tercer avance,	Asesoria con el lider del trabajo,	0",
            "Terminar tercer avance,	Asesoria con el lider del trabajo,	1",
            "Terminar tercer avance,	Asesoria con el lider del trabajo,	2",
            "Terminar tercer avance,	Reunion para recibir retroalimentacion,	0",
            "Terminar tercer avance,	Reunion para recibir retroalimentacion,	1",
            "Terminar tercer avance,	Reunion para recibir retroalimentacion,	2",
            "Terminar tercer avance,	Efectuar las correciones indicadas,	0",
            "Terminar tercer avance,	Efectuar las correciones indicadas,	1",
            "Terminar tercer avance,  Efectuar las correciones indicadas,	2",
            "Terminar tercer avance,	Cita medica con el dentista,	0",
            "Terminar tercer avance,	Cita medica con el dentista,	1",
            "Terminar tercer avance,	Cita medica con el dentista,	2",
            "Proyecto independiente,	Reunion inicial de grupo,	0",
            "Proyecto independiente,	Reunion inicial de grupo,	1",
            "Proyecto independiente,	Reunion inicial de grupo,	2",
            "Proyecto independiente,	Asesoria con el lider del trabajo,	0",
            "Proyecto independiente,	Asesoria con el lider del trabajo,	1",
            "Proyecto independiente,	Asesoria con el lider del trabajo,	2",
            "Proyecto independiente,	Reunion para recibir retroalimentacion,	0",
            "Proyecto independiente,	Reunion para recibir retroalimentacion,	1",
            "Proyecto independiente,	Reunion para recibir retroalimentacion,	2",
            "Proyecto independiente,	Efectuar las correciones indicadas,	0",
            "Proyecto independiente,	Efectuar las correciones indicadas,	1",
            "Proyecto independiente,	Efectuar las correciones indicadas,	2",
            "Proyecto independiente,	Cita medica con el dentista,	0",
            "Proyecto independiente,	Cita medica con el dentista,	1",
            "Proyecto independiente,	Cita medica con el dentista,	2",
            "Asistencia de indagatoria,	Reunion inicial de grupo,	0",
            "Asistencia de indagatoria,	Reunion inicial de grupo,	1",
            "Asistencia de indagatoria,	Reunion inicial de grupo,	2",
            "Asistencia de indagatoria,	Asesoria con el lider del trabajo,	0",
            "Asistencia de indagatoria,	Asesoria con el lider del trabajo,	1",
            "Asistencia de indagatoria	Asesoria con el lider del trabajo,	2",
            "Asistencia de indagatoria,	Reunion para recibir retroalimentacion,	0",
            "Asistencia de indagatoria,	Reunion para recibir retroalimentacion,	1",
            "Asistencia de indagatoria,	Reunion para recibir retroalimentacion,	2",
            "Asistencia de indagatoria,	Efectuar las correciones indicadas,	0",
            "Asistencia de indagatoria,	Efectuar las correciones indicadas,	1",
            "Asistencia de indagatoria,	Efectuar las correciones indicadas,	2",
            "Asistencia de indagatoria,	Cita medica con el dentista,	0",
            "Asistencia de indagatoria,	Cita medica con el dentista,	1",
            "Asistencia de indagatoria,	Cita medica con el dentista,	2",
            "Evento medico privado,	Cita para solicitar lentes ante la CCSS,	0",
            "Evento medico privado,	Cita para solicitar lentes ante la CCSS,	1",
            "Evento medico privado,	Cita para solicitar lentes ante la CCSS,	2",
            "Evento medico privado,	Cita para revision ocular de rutina,	0",
            "Evento medico privado,	Cita para revision ocular de rutina,	1",
            "Evento medico privado,	Cita para revision ocular de rutina,	2",
            "Evento medico privado,	Operacion del corazon,	0",
            "Evento medico privado,	Operacion del corazon,	1",
            "Evento medico privado,	Operacion del corazon,	2",
            "Evento medico privado,	Transplante de higado,	0",
            "Evento medico privado,	Transplante de higado,	1",
            "Evento medico privado,	Transplante de higado,	2",
            "Evento medico privado,	Poda del corte clasico,	0",
            "Evento medico privado,	Poda del corte clasico,	1",
            "Evento medico privado,	Poda del corte clasico,	2",
            "Evento medico publico,	Cita para solicitar lentes ante la CCSS,	0",
            "Evento medico publico,	Cita para solicitar lentes ante la CCSS,	1",
            "Evento medico publico,	Cita para solicitar lentes ante la CCSS,	2",
            "Evento medico publico,	Cita para revision ocular de rutina,	0",
            "Evento medico publico,	Cita para revision ocular de rutina,	1",
            "Evento medico publico,	Cita para revision ocular de rutina,	2",
            "Evento medico publico,	Operacion del corazon,	0",
            "Evento medico publico,	Operacion del corazon,	1",
            "Evento medico publico,	Operacion del corazon,	2",
            "Evento medico publico,	Transplante de higado,	0",
            "Evento medico publico,	Transplante de higado,  1",
            "Evento medico publico,	Transplante de higado,  2",
            "Corte del cesped casa Juan,	Poda del corte clasico,	0",
            "Corte del cesped casa Juan,	Poda del corte clasico,	1",
            "Corte del cesped casa Juan,	Poda del corte clasico,	2",
            "Corte del cesped casa Juan,	Poda del corte especializado con escultura,	0",
            "Corte del cesped casa Juan,	Poda del corte especializado con escultura,	1",
            "Corte del cesped casa Juan,	Poda del corte especializado con escultura,	2",
            "Corte del cesped casa Juan,	Poda del corte avanzado de figuras de animales,	0",
            "Corte del cesped casa Juan,	Poda del corte avanzado de figuras de animales,	1",
            "Corte del cesped casa Juan,	Poda del corte avanzado de figuras de animales,	2",
            "Corte del cesped casa Carla,	Poda del corte clasico,	0",
            "Corte del cesped casa Carla,	Poda del corte clasico,	1",
            "Corte del cesped casa Carla,	Poda del corte clasico,	2",
            "Corte del cesped casa Carla,	Poda del corte especializado con escultura,	0",
            "Corte del cesped casa Carla,	Poda del corte especializado con escultura,	1",
            "Corte del cesped casa Carla,	Poda del corte especializado con escultura,	2",
            "Corte del cesped casa Carla,	Poda del corte avanzado de figuras de animales,	0",
            "Corte del cesped casa Carla,	Poda del corte avanzado de figuras de animales,	1",
            "Corte del cesped casa Carla,	Poda del corte avanzado de figuras de animales,	2",
            "Corte del cesped empresa El Destino,	Poda del corte clasico,	0",
            "Corte del cesped empresa El Destino,	Poda del corte clasico,	1",
            "Corte del cesped empresa El Destino,	Poda del corte clasico,	2",
            "Corte del cesped empresa El Destino,	Poda del corte especializado con escultura,	0",
            "Corte del cesped empresa El Destino,	Poda del corte especializado con escultura,	1",
            "Corte del cesped empresa El Destino,	Poda del corte especializado con escultura,	2",
            "Corte del cesped empresa El Destino,	Poda del corte avanzado de figuras de animales,	0",
            "Corte del cesped empresa El Destino,	Poda del corte avanzado de figuras de animales,	1",
            "Corte del cesped empresa El Destino,	Poda del corte avanzado de figuras de animales,	2",
            "Corte del cesped empresa El Alto,	Poda del corte clasico	0",
            "Corte del cesped empresa El Alto,	Poda del corte clasico	1",
            "Corte del cesped empresa El Alto,	Poda del corte clasico	2",
            "Corte del cesped empresa El Alto,	Poda del corte especializado con escultura,	0",
            "Corte del cesped empresa El Alto,	Poda del corte especializado con escultura,	1",
            "Corte del cesped empresa El Alto,	Poda del corte especializado con escultura,	2",
            "Corte del cesped empresa El Alto,	Poda del corte avanzado de figuras de animales,	0",
            "Corte del cesped empresa El Alto,	Poda del corte avanzado de figuras de animales,	1",
            "Corte del cesped empresa El Alto,	Poda del corte avanzado de figuras de animales,	2",
            "Evento judicial,	Juicio por evasion de impuestos,	0",
            "Evento judicial,	Juicio por evasion de impuestos,	1",
            "Evento judicial,	Juicio por evasion de impuestos,	2",
            "Evento judicial,	Poner denuncia por intento de asesinato,	0",
            "Evento judicial,	Poner denuncia por intento de asesinato,	1",
            "Evento judicial,	Poner denuncia por intento de asesinato,	2",
            "Evento judicial,	Juicio por encubrimiento de asesinato,	0",
            "Evento judicial,	Juicio por encubrimiento de asesinato,	1",
            "Evento judicial,	Juicio por encubrimiento de asesinato,	2"
          ]
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
    for(i=0;i<171;i++){
      this.setState({petition:this.state.data[i]});
      this.sendRequest();
    }
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
