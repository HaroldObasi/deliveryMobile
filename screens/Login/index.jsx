import { StyleSheet, Text, View } from "react-native";
import loginStyles from "./styles";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("user", value);
    } catch (e) {}
  };

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    console.log("user: ", user);
    console.log("user stringify: ", JSON.stringify(user));
    storeData(JSON.stringify(user));
  };
  return (
    <View style={loginStyles.form}>
      <TextInput
        style={styles.formInput}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        selectionColor="#E05D5D"
        underlineColor="#E05D5D"
        activeOutlineColor="#E88787"
      />
      <TextInput
        style={styles.formInput}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button mode="contained" onPress={handleLogin}>
        hello
      </Button>

      <Button>or create an account ?</Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
