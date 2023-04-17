import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { readObjectFromCache } from "./utiils/caching";
import BottomTab from "./navigators/BottomTab";
import { AppProvider } from "./context";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);

  const getData = async () => {
    const res = await readObjectFromCache("user");
    setUser(res);
    if (user !== null) {
      console.log("user is present: ", user);
    } else {
      console.log("there is no present user: ", user);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppProvider>
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
          <BottomTab />
        )}
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
