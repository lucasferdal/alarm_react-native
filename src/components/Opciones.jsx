import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Button } from 'react-native';

const Opciones = () => {
    let [show, setShow] = useState(false)

    const cambiar = () => {

    }

    return (
        <View style={styles.modal}>
            <Button title='Modal' onPress={() => {
                show = !show;
                console.log(show);
            }} />
            {/* <TouchableOpacity >
                <Text style={{ color: 'white' }}>Mostrar Modal</Text>
            </TouchableOpacity> */}
            <Modal
                transparent={true}
                visible={show}
                style={styles.interior}
            >


                <Text>
                    Boenas
                </Text>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '50%',
        margin: '20%',
        backgroundColor: 'black'
    },
    interior: {
        color: 'green'
    }
})

export default Opciones;
