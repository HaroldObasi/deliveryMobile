import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { TextInput as MaterialTI } from "react-native-paper";
import React, { useState } from "react";
import authStyles from "../../styles/authStyles";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={authStyles.container} behavior="padding">
        <Text style={authStyles.title}>Create Account</Text>

        <MaterialTI
          label="First Name"
          value={firstName}
          mode="outlined"
          onChangeText={(text) => setFirstName(text)}
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
        <MaterialTI
          label="Confirm Password"
          value={confirmPassword}
          mode="outlined"
          onChangeText={(text) => setConfirmPassword(text)}
          selectionColor="#E05D5D"
          underlineColor="#E05D5D"
          activeOutlineColor="#E88787"
          style={authStyles.input}
        />
        <View style={authStyles.buttonholder}>
          <TouchableOpacity
            style={authStyles.button}
            onPress={() => console.log("data")}
          >
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
