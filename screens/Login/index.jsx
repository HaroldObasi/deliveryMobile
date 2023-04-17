import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { API_URL } from "../../apiConfig";
import authStyles from "../../styles/authStyles";
import React, { useState } from "react";
import { TextInput as MaterialTI } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { addObjectToCache } from "../../utiils/caching";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async (email, password) => {
    try {
      const response = await API_URL.post("user/signin", {
        email: email,
        password: password,
      });
      console.log("response: ", response.data);
      addObjectToCache("user", response.data.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={authStyles.container} behavior="padding">
        <Text style={authStyles.title}>Log In</Text>

        <MaterialTI
          label="Email"
          value={email}
          mode="outlined"
          onChangeText={(text) => setEmail(text)}
          selectionColor="#E05D5D"
          underlineColor="#E05D5D"
          activeOutlineColor="#E88787"
          style={authStyles.input}
        />
        <MaterialTI
          label="Password"
          value={password}
          mode="outlined"
          onChangeText={(text) => setPassword(text)}
          selectionColor="#E05D5D"
          underlineColor="#E05D5D"
          activeOutlineColor="#E88787"
          style={authStyles.input}
        />

        <View style={authStyles.buttonholder}>
          <TouchableOpacity
            style={authStyles.button}
            onPress={() => handleLogin(email, password)}
          >
            <Text style={authStyles.text}>Log In</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={authStyles.alt}>
            Don't have an account? {<Text>Create an account</Text>}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
