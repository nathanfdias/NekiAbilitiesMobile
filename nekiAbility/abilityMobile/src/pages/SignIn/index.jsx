import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../context/authProvider/useAuth";
import api from '../../service/api';
import axios from "axios";

export default function SignIn() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const auth = useAuth();

  const handleSignIn = () => { 

    api
    .post("/auth/signin", {
      username: username,
      password: password,
    })
    .then((request) => {
      // auth.authenticate(request.data);
      console.log(request.data)
      navigation.navigate("/Home");
    })
    .catch((err) => {
      Alert.alert(err.response.data.message);
});
};


  return (
    <View style={styles.container}>
      <Animatable.View
        animation='fadeInLeft'
        delay={500}
        style={styles.containerHeader}>
        <Text style={styles.message}>Bem vindo</Text>
      </Animatable.View>
      <Animatable.View
        animation='fadeInUp'
        style={styles.containerForm}>
        <Text style={styles.title}>Username</Text>
        <TextInput
          placeholder='Digite um username'
          placeholderTextColor='#A9A9A9'
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <Text style={styles.title}>Senha</Text>
        <Animatable.View>
          <View style={styles.inputArea}>
            <TextInput
              placeholder='Digite sua senha'
              placeholderTextColor='#A9A9A9'
              secureTextEntry={hidePass}
              style={styles.input2}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHidePass(!hidePass)}>
              {hidePass ? (
                <Ionicons
                  name='eye'
                  color='black'
                  size={25}
                />
              ) : (
                <Ionicons
                  name='eye-off'
                  color='black'
                  size={25}
                />
              )}
            </TouchableOpacity>
          </View>
        </Animatable.View>
        {/* Chamada da Função */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSignIn}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>
            Não possui uma conta?{" "}
            <Text
              style={styles.linkSubscribe}
              onPress={() => navigation.navigate("/Register")}>
              Cadastre-se
            </Text>
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003580",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  input2: {
    height: 60,
    marginBottom: 12,
    fontSize: 16,
    flexDirection: "row",
    width: "85%",
  },
  inputArea: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#003580",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerText: {
    color: "#a1a1a1",
  },
  contentAlert: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  warningAlert: {
    paddingLeft: 10,
    color: "#4d5156",
  },
  linkSubscribe: {
    color: "#1877f2",
  },
});