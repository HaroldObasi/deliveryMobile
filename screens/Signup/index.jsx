import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { TextInput as MaterialTI } from "react-native-paper";
import React, { useState } from "react";
import authStyles from "../../styles/authStyles";
import { useNavigation } from "@react-navigation/native";
import { API_URL } from "../../apiConfig";
import { addObjectToCache } from "../../utiils/caching";
import { useGlobalContext } from "../../context";

const Signup = () => {
  const navigation = useNavigation();
  const { setUser } = useGlobalContext();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (data) => {
    try {
      const response = await API_URL.post("user/create", {
        fullName,
        email,
        password,
      });
      // const userData = response.data;

      addObjectToCache("user", response.data.user);
      setUser(response.data.user);
    } catch (error) {
      Alert.alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={authStyles.container} behavior="padding">
        <Text style={authStyles.title}>Create Account</Text>

        <MaterialTI
          label="First Name"
          value={fullName}
          mode="outlined"
          onChangeText={(text) => setFullName(text)}
          selectionColor="#E05D5D"
          underlineColor="#E05D5D"
          activeOutlineColor="#E88787"
          style={authStyles.input}
        />
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
          <TouchableOpacity style={authStyles.button} onPress={handleSignup}>
            <Text style={authStyles.text}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={authStyles.alt}>
            Already have an Account? {<Text>Login</Text>}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;
