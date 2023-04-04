import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import Login from "./screens/Login";

export default function App() {
  const Stack = createNativeStackNavigator();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        console.log("there is a user object: ", value);
      } else {
        console.log("there is no user object: ", value);
      }
    } catch (e) {
      console.log("cache read: ", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
