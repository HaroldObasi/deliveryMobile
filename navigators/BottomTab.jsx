import Home from "../screens/Home";
import Profile from "../screens/Profile";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
