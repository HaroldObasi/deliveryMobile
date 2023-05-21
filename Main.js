import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useGlobalContext } from "./context";
import BottomTab from "./navigators/BottomTab";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import React, { useEffect } from "react";

const Main = () => {
  const Stack = createNativeStackNavigator();
  const { user } = useGlobalContext();

  useEffect(() => {
    console.log("user state changed");
  }, [user]);

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
        <BottomTab />
      )}
    </NavigationContainer>
  );
};

export default Main;
