import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Button, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Opciones = (props) => {

    let cerrarModal = (a) => {
        props.cerrarlo(a)
    }

    return (
        <View style={styles.modal}>
            <View style={styles.interior}>
                <Text>
                    Boenas
                </Text>
                <Button title='Cerrar Modal' onPress={() => cerrarModal(false)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    interior: {
        backgroundColor: '#797a7a',
        width: '80%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Opciones;
