import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Cadastro() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [newhidePass, setNewHidePass] = useState(true);

  function register() {
    if(senha === confirmarSenha){
      axios
        .post("https://neki-production.up.railway.app/auth/signup",{
            username: username,
            email: email,
            password: senha,
        })
        .then(response => {
          console.log(response);
          alert('Usuário cadastrado com sucesso!');
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          alert(error.response.data.errors[0]);
        });
    } else {
      alert('Senhas inválidas');
    }
  }

  return (
    <View style={styles.container}>
      <Animatable.View
        animation='fadeInLeft'
        delay={500}
        style={styles.containerHeader}>
        <Text style={styles.message}>Cadastro</Text>
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
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite um email'
          placeholderTextColor='#A9A9A9'
          keyboardType='email-address'
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.title}>Senha</Text>
        <View style={styles.inputArea}>
          <TextInput
            placeholder='Sua senha'
            placeholderTextColor='#A9A9A9'
            secureTextEntry={hidePass}
            style={styles.input2}
            onChangeText={(text) => setSenha(text)}
            value={senha}
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
        <Text style={styles.title}>Confirme sua senha</Text>
        <View style={styles.inputArea}>
          <TextInput
            placeholder='Sua senha'
            placeholderTextColor='#A9A9A9'
            secureTextEntry={newhidePass}
            style={styles.input2}
            onChangeText={(text) => setConfirmarSenha(text)}
            value={confirmarSenha}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setNewHidePass(!newhidePass)}>
            {newhidePass ? (
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

          <TouchableOpacity
            style={styles.button}
            onPress={register}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("/SignIn")}>
          <Text style={styles.buttonText}>Voltar</Text>
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
});
