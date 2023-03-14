import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Button, TextInput } from "react-native";

export default function Window() {
    const [visible, setVisible] = useState(true);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visible} style={{}}>
        <View style={styles.modal}>
            <TextInput
              placeholder='Digite o level'
              keyboardType="numeric"
              placeholderTextColor='#000000'
              style={styles.input}
            />
            <View style={styles.buttonsContainer}>
                <Button title="Fechar" color="white" onPress={() => {setVisible(false)}}/>
                <Button color="white" title="Enviar" onPress={() => {}}/>
            </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor:"#000000b0",
        marginTop: '70%',
        width:'80%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 20,
        elevation: 10,
    },
    buttonsContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input:{
        backgroundColor:'#fff',
        height: 30,
        width: '70%',
        marginVertical: 10,
        alignSelf: 'center',
        padding: 5,
    }
});