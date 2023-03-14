import React from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SkillsHeader from "../../components/SkillsHeader";

export default function Skills() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SkillsHeader />
      <ScrollView>
        <Text style={styles.text}>SKILLS</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={styles.skillContent}>
            <Image
              source={{ uri: "https://www.php.net/images/meta-image.png" }}
              style={styles.skillsImg}
            />
            <Text style={styles.skillsText}>PHP</Text>
            <View opacity={0.4}>
              <Text style={styles.skillsText}>Version: 8.2.1</Text>
            </View>
            <TouchableOpacity
                style={styles.skillsButton}
                onPress={() => {}}>
                <Text style={{color:'#fff'}}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
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

