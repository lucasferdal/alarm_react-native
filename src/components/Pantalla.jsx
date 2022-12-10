import React, { useState, useRef } from "react";
import Constants from 'expo-constants'
import Animated from "react-native-reanimated"
import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from 'react-native-date-picker'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Alarma from "./Alarma";

let alarmitas = []

const Pantalla = () => {

    return (
        <Animated.View
            entering={FadeInUp}
            exiting={FadeOutUp}
        >
            lorem ipsum
        </Animated.View>
    );

    // const nuevasAlarmas = useRef()

    // const [date, setDate] = useState(new Date())
    // const [mode, setMode] = useState('time')
    // const [show, setShow] = useState(false)

    // const [newDate, setNewDate] = useState(alarmitas)
    // // const [translate, setTranslate] = useState()

    // const ballAnimatedValue = useRef(new Animated.Value(0)).current;

    // const moveBall = () => {
    //     Animated.timing(ballAnimatedValue, {
    //         toValue: 1,
    //         duration: 1000,
    //         useNativeDriver: true,
    //     }).start();
    // };

    // const xVal = ballAnimatedValue.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, 30],
    // });

    // const veamos = {
    //     transform: [{
    //         translateX: xVal
    //     }]
    // }

    // const aber = (e, x) => {
    //     const currentDate = x || date;
    //     let juan = new Date()

    //     setDate(juan)
    //     setShow(false)

    //     let hora = currentDate.getHours()
    //     let minuto = currentDate.getMinutes()

    //     alarmitas.push({
    //         hora: hora,
    //         minuto: minuto
    //     })

    //     console.log(alarmitas)
    //     // alert(alar)
    // }

    // const nose = () => {
    //     setShow(true)
    // }

    // const moverBolita = () => {
    //     console.log('SKEREEE')
    // }

    // return (
    //     <View style={styles.container}>
    //         <Text style={styles.titulo}>Alarma Rompehuevos</Text>

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

    //             <View ref={nuevasAlarmas}>

    //                 {newDate.map((e, i) => {
    //                     let horario = undefined

    //                     e.hora >= 12 ? horario = 'PM' : horario = 'AM'

    //                     return (
    //                         <View key={i} style={[styles.nuevasAlarmas, styles.hr]}>
    //                             <Text style={styles.nuevasAlarmasFuente} >{e.hora}:{e.minuto} {horario}</Text>

    //                             <View style={styles.activarDesactivarAlarma}>
    //                                 <TouchableOpacity style={[styles.bolita, veamos]} onPress={moveBall()} />
    //                             </View>

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
        width: '50%',
        height: '110%',
        backgroundColor: 'white',
        borderRadius: 100,
        // transform: [{ translateX: translate}],
        // marginLeft: '50%'
    }

});

export default Pantalla;