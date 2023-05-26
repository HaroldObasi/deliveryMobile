import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import OrderDetails from "../screens/OrderDetails";

export default ProfileNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="OrderDetails"
        options={{
          title: "",
        }}
        component={OrderDetails}
      />
    </Stack.Navigator>
  );
};
