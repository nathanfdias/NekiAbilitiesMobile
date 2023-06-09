import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View
        style={{
          width: 54,
          height: 54,
          backgroundColor: "#0003",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
        }}>
        <Feather
          name='corner-up-left'
          size={28}
          color='white'
          onPress={() => {
            navigation.navigate("/Home");
          }}
        />
      </View>
      <View
        style={{
          width: 54,
          height: 54,
          backgroundColor: "#0003",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
        }}>
        <Feather
          name='log-out'
          size={28}
          color='#FFF'
          onPress={() => {
            navigation.navigate("/SignIn");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#003580",
    height: 120,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  input: {
    fontSize: 13,
    width: "40%",
    height: 38,
    color: "#FFF",
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    paddingHorizontal: 20,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#0003",
    color: "#FFF",
  },
});