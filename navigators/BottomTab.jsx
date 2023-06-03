import Home from "../screens/Home";
import Profile from "../screens/Profile";
import CreateOrder from "../screens/CreateOrder";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HomeNavigator from "./HomeNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { useGlobalContext } from "../context";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const { user } = useGlobalContext();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {user.role === "USER" ? (
        <Tab.Screen
          name="Create Order"
          component={CreateOrder}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="package" color={color} size={30} />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />
      )}

      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
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
