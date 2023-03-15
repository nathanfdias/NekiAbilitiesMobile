import React,{useEffect, useState} from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from "react-native";
import SkillsHeader from "../../components/SkillsHeader";
import { getUserLocalStorage } from "../../context/authProvider/util";
import api from "../../service/api";
import axios from "axios";

export default function Skills() {
  const [abilities, setAbilities] = useState([]);
  const [idSkill, setIdSkill] = useState(0);

  useEffect(() => {
    api
      .get(`/abilities`)
      .then((response) => {
        setAbilities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  function cadastrarUserAbility(idSkill) {
    axios
      .post(
        "https://neki-production.up.railway.app/userAbility",
        {
          user: {
            id: 1,
          },
          ability: {
            id: idSkill,
          },
          knowledgeLevel: 1,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6MSwiaWF0IjoxNjc4OTE2NzkyLCJleHAiOjE2Nzg5MTc2OTJ9.e7iKs2FXnTzbTfKTc2E_gRyjsyens3jScKgEIGJILe_uoEqiNOO4sL8zRf_urVlvcvDh93_JalGuk7IxQkkwJA",
          },
        }
      )
      .then((res) => {
        Alert.alert("Skill Adicionada");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  }

  const renderItem = ({ item }) => (
    <View style={styles.skillContent}>
      <Image
        source={{ uri: item.image_url }}
        style={styles.skillsImg}
      />
      <Text style={styles.skillsText}>{item.name}</Text>
      <View opacity={0.4}>
        <Text style={styles.skillsText}>Version: {item.version}</Text>
      </View>
      <TouchableOpacity
        style={styles.skillsButton}
        onPress={() => {
          cadastrarUserAbility(item.id)
        }}
      >
        <Text style={{ color: "#fff" }}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={1}
      style={{ width: "100%" }}
      data={abilities}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListHeaderComponent={<SkillsHeader />}
      ListEmptyComponent={<Text>No skills found.</Text>}
    />
  );
}

const styles = StyleSheet.create({
  skillContent: {
    backgroundColor:'#00000013',
    paddingVertical: "4%",
    paddingHorizontal: "6%",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize: 26,
    alignSelf: 'center',
    margin: 20,
    marginBottom: 30,
    textDecorationStyle: "double"
},
  skillsImg: {
    width: 175,
    height: 175,
  },
  skillsText: {
    fontSize: 16,
  },
  skillsButton:{
    backgroundColor: "#003580",
    width: "50%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  }
});

