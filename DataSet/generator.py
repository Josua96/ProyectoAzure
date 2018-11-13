import csv

csvName= 'dataResult'
openMOde='w'
encode='utf-8'

#cada tarea se asocia a una descripción predeterminada
tasks=[{"Pasear al perro": [0,1,2,3,4,5,6]},
       {"Pasear al gato": [0,1,2,3,4,5,6]},
       {"Reparacion del automovil":[7]},
       {"Reparacion de Toyota 2018 ":[7,10]},
       {"Reparacion de Bici 20":[9]},
       {"Terminar tercer avance": [11,12,13,14,15]},
       {"Proyecto independiente": [11,12,13,14,15]},
       {"Asistencia de indagatoria": [11,12,13,14,15]},
       {"Evento medico privado": [16,17,18,19,20]},
       {"Evento medico publico": [16,17,18,19]},
       {"Corte del cesped casa Juan": [20,21,22]},
       {"Corte del cesped casa Carla": [20,21,22]},
       {"Corte del cesped empresa El Destino": [20,21,22]},
       {"Corte del cesped empresa El Alto": [20,21,22]},
       {"Evento judicial": [23,24,25]}
    ]

descriptions=[
    "Paseo por el parque",
    "Paseo por el bosque",
    "Paseo en el patio",
    "Paseo en la ciudad",
    "Paseo alrededor de la pradera",
    "Paseo ccn mis hijos",
    "Paseo por la tarde",
    "Ir al centro de reparaciones Don Carlos",
    "Ir al centro de reparaciones Juan Miguel",
    "Ir al taller de motocicletas Montano",
    "Ir al centro oficial de la Toyota",
    "Reunion inicial de grupo",
    "Asesoria con el lider del trabajo",
    "Reunion para recibir retroalimentacion",
    "Efectuar las correciones indicadas",
    "Cita medica con el dentista",
    "Cita para solicitar lentes ante la CCSS",
    "Cita para revision ocular de rutina",
    "Operacion del corazon",
    "Transplante de higado",
    "Poda del corte clasico",
    "Poda del corte especializado con escultura",
    "Poda del corte avanzado de figuras de animales",
    "Juicio por evasion de impuestos",
    "Poner denuncia por intento de asesinato",
    "Juicio por encubrimiento de asesinato"
    ]

# 0= pendiente, 1= en proceso, 2= realizada
states=[0,1,2]

def writeLineToCsv(writer,task,description,state):
    writer.writerow([task,description,state])
    return

def generateCombinations(writer,tasks,descriptions,states):
    for task in tasks:
        for key in task.keys():
            for description in task[key]:
                for state in states:
                    print("indice: ", description)
                    writeLineToCsv(writer,key,descriptions[description],state)
    return


def generateCSVFile(tasks,descriptions,states):

    with open ('dataResult.csv','w', newline='', encoding=encode) as f:
        writer= csv.writer(f)
        generateCombinations(writer, tasks,descriptions,states)
        return
        

generateCSVFile(tasks,descriptions,states)










