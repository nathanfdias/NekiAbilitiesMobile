import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import HomeHeader from "../../components/HomeHeader";
import api from "../../service/api";
import { getUserLocalStorage } from "../../context/authProvider/util";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [userAbilities, setUserAbilities] = useState([]);
  const [idUserAbility, setIdUserAbility] = useState(0);
  const [idAbility, setIdAbility] = useState(0);
  const [knowledgeLevel, setKnowledgeLevel] = useState(0);
  const user = getUserLocalStorage();

  useEffect(() => {
    api
      .get(`/users/1`)
      .then((response) => {
        setUserAbilities(response.data.userAbility);
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);

  const deleteUserAbility = () => {
    api
      .delete(`/userAbility/${idUserAbility}`)
      .then((response) => {
        Alert.alert(`UserAbility deletada id: ${idUserAbility}`);
      })
      .catch((error) => {
        Alert.alert(error);
      })
  };

  const updateUserAbility = async() => {
    // console.log(idUserAbility);
    // console.log(idAbility);
    // console.log(knowledgeLevel);
    // setVisible(false);
    await api
      .put(`/userAbility/${idUserAbility}`, {
        user: {
          id: 1,
        },
        ability: {
          id: idAbility,
        },
        knowledgeLevel: knowledgeLevel,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6MSwiaWF0IjoxNjc4OTE2NzkyLCJleHAiOjE2Nzg5MTc2OTJ9.e7iKs2FXnTzbTfKTc2E_gRyjsyens3jScKgEIGJILe_uoEqiNOO4sL8zRf_urVlvcvDh93_JalGuk7IxQkkwJA",
        },
      }
      )
      .then((response) => {
        Alert.alert("Level Atualizado com sucesso!");
        setVisible(false);
      })
      .catch((error) => {
        Alert.alert("Erro ao Atualizar");
      })
  }

  function handleSetValues(item) {
    setIdUserAbility(item.id);
    setVisible(true);
    setIdAbility(item.ability.id);
  }

  const renderItem = ({ item }) => (
    <View style={styles.containerSkill}>
      <TouchableOpacity style={styles.contentSkills} onPress={() => {handleSetValues(item)}}>
        <Image style={styles.skillImg} source={{ uri: item.ability.image_url }}/>
        <Text style={styles.skillText}>{item.ability.name}</Text>
        <View opacity={0.4}>
          <Text style={styles.skillText}>Nivel: {item.knowledgeLevel}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skillsButton}>
        <Text style={{color:'#fff'}}>Deletar</Text>
      </TouchableOpacity>
      <View>
        <Modal animationType="slide" transparent={true} visible={visible} style={{}}>
          <View style={styles.modal}>
            <TextInput
              placeholder='Digite o level'
              keyboardType="numeric"
              placeholderTextColor='#000000'
              style={styles.inputModal}
              onChangeText={(number) => setKnowledgeLevel(number)}
            />
            <View style={styles.buttonsContainerModal}>
              <Button title="Fechar" color="white" onPress={() => {setVisible(false)}}/>
              <Button color="white" title="Enviar" onPress={updateUserAbility}/>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
  
  return (
    <>
      <HomeHeader />
      <Text style={styles.textTitle}>- MINHAS SKILLS -</Text>
      <Text style={{color:'#808080', alignSelf:'center'}}>clique na skill para editar o level</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        style={{ width: "100%" }}
        data={userAbilities}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No skills found.</Text>}
      />
    </>
  );
  }

const styles = StyleSheet.create({
  containerSkill: {
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle:{
    fontSize: 18,
    margin: 18,
    alignSelf: 'center'
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
  skillsButton:{
    backgroundColor: "#003580",
    width: "30%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 4,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
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
