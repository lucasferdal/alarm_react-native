import React, { useState, useRef, useEffect } from "react";
import Constants from 'expo-constants'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Switch } from 'react-native-paper'
import { StyleSheet, Text, View, TouchableOpacity, Animated, nativeEvent } from 'react-native';
import Alarma from "./Alarma";
import Opciones from "./Opciones"

let llaveOriginal = 0

const Pantalla = () => {

    return (
        <Opciones/>
    )

    // const [date, setDate] = useState(new Date())
    // const [mode, setMode] = useState('time')
    // const [show, setShow] = useState(false)

    // let [newDate, setNewDate] = useState([])

    // let [keys, setKeys] = useState([])

    // let [isSwitch, setisSwitch] = useState({
    //     value: false,
    //     llave: keys
    // })

    // let [nuevoSwitch, setNuevoSwitch] = useState([])


    // const toggleSwitch = (i) => {
    //     setisSwitch(!isSwitch)
    //     // let filtrado = newDate.filter((e, x) => x !== i)

    //     // setNewDate(newDate = filtrado)

    //     nuevoSwitch[i].value = !nuevoSwitch[i].value

    //     // console.log(nuevoSwitch)
    // }

    // const aber = (e, x) => {
    //     const currentDate = x || date;
    //     let juan = new Date()

    //     setDate(juan)
    //     setShow(false)

    //     let hora = currentDate.getHours()
    //     let minuto = currentDate.getMinutes()

    //     newDate.push({
    //         hora: hora,
    //         minuto: minuto,
    //         key: llaveOriginal
    //     })

    //     nuevoSwitch.push({
    //         value: false,
    //         id: llaveOriginal
    //     })

    //     setKeys(keys + 1)
    // }

    // const nose = () => {
    //     setShow(true)
    // }

    // return (
    //     <View style={styles.container}>
    //         <Text style={styles.titulo}>Alarma Rompehuevos</Text>
    //                     <Opciones />

    //         <View style={styles.alarmas}>
    //             <View style={styles.contenedorNuevaAlarma}>
    //                 <Text style={styles.nuevaAlarma}>Nueva Alarma</Text>

    //                 <TouchableOpacity onPress={() => { nose() }}>
    //                     <Text style={styles.mas}>+</Text>
    //                 </TouchableOpacity>

    //                 {show && (
    //                     <DateTimePicker
    //                         testID="dateTimePicker"
    //                         display="default"
    //                         value={date}
    //                         mode={mode}
    //                         is24Hour={true}
    //                         onChange={aber}
    //                     />
    //                 )}

    //             </View>
    //             <View style={styles.hr} />

    //             <View>

    //                 {newDate.map((e, i) => {
    //                     let horario = undefined
    //                     llaveOriginal = i + 1

    //                     e.hora >= 12 ? horario = 'PM' : horario = 'AM'

    //                     return (
    //                         <View key={i} style={[styles.nuevasAlarmas, styles.hr]}>
    //                             <Text style={styles.nuevasAlarmasFuente} >{e.hora}:{e.minuto} {horario}</Text>

    //                             <Switch style={styles.bolita} value={nuevoSwitch[i].value} onValueChange={() => toggleSwitch(i)} />
    //                         </View>
    //                     )
    //                 })}

    //             </View>

    //         </View>

    //     </View>
    // )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#045754',
    },
    alarmas: {
        flex: 1,
        backgroundColor: '#00082b',
        marginTop: '10%'
        // minHeight: '100%',
    },
    nuevaAlarma: {
        color: '#0a910a',
        fontSize: 20,
        marginTop: 15
    },
    hr: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    mas: {
        color: '#0a910a',
        fontSize: 40,
        marginRight: 30,
        fontWeight: 'bold',
    },
    titulo: {
        marginTop: Constants.statusBarHeight + 20,
        color: '#bfbfbf',
        fontSize: 30,
        fontWeight: 'bold',
        // marginHorizontal: 'auto'
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    contenedorNuevaAlarma: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        height: 50,
    },
    nuevasAlarmas: {
        backgroundColor: '#00082b',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nuevasAlarmasFuente: {
        color: '#bfbfbf',
        fontSize: 25,
        marginLeft: '15%',
        marginTop: '2%'
    },
    activarDesactivarAlarma: {
        width: '18%',
        height: '60%',
        borderWidth: 1,
        marginRight: '14%',
        marginTop: '3%',
        backgroundColor: '#171f3d',
        borderRadius: 20,
        justifyContent: 'center',
    },
    bolita: {
        marginRight: '15%'
    }

});

export default Pantalla;
//197 lineas