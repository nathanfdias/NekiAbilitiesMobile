import React,{useState} from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal, Button, TextInput
} from "react-native";
import HomeHeader from "../../components/HomeHeader";

export default function Home() {
    const [visible, setVisible] = useState(false);

  function teste() {}

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HomeHeader />
      <View style={styles.containerSkill}>
        <TouchableOpacity style={styles.contentSkills} onPress={() => {setVisible(true)}}>
          <Image style={styles.skillImg} />
          <Text style={styles.skillText}> Java</Text>
          <View opacity={0.4}>
            <Text style={styles.skillText}>Nivel: 6</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentSkills} onPress={teste}>
          <Image style={styles.skillImg} />
          <Text style={styles.skillText}> Java</Text>
          <View opacity={0.4}>
            <Text style={styles.skillText}>Nivel: 6</Text>
          </View>
        </TouchableOpacity>
        <View>
      <Modal animationType="slide" transparent={true} visible={visible} style={{}}>
        <View style={styles.modal}>
            <TextInput
              placeholder='Digite o level'
              keyboardType="numeric"
              placeholderTextColor='#000000'
              style={styles.inputModal}
            />
            <View style={styles.buttonsContainerModal}>
                <Button title="Fechar" color="white" onPress={() => {setVisible(false)}}/>
                <Button color="white" title="Enviar" onPress={() => {}}/>
            </View>
        </View>
      </Modal>
    </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerSkill: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentSkills: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  skillImg: {
    width: 145,
    height: 145,
    backgroundColor: "red",
  },
  skillText: {
    fontSize: 16,
  },
  modal:{
    backgroundColor:"#000000b0",
    marginTop: '70%',
    width:'80%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
    elevation: 10,
},
buttonsContainerModal:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
},
inputModal:{
    backgroundColor:'#fff',
    height: 30,
    width: '70%',
    marginVertical: 10,
    alignSelf: 'center',
    padding: 5,
},
});
