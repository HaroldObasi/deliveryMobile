import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { readObjectFromCache } from "./utiils/caching";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);

  const getData = async () => {
    const res = await readObjectFromCache("user");
    setUser(res);
    if (user !== null) {
      console.log("user is present: ", user);
    } else {
      console.log("there is no present user");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <NavigationContainer>
      {user === null ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
