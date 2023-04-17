import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CreateOrder from "../screens/CreateOrder";

export default HomeNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="CreateOrder" component={CreateOrder} />
    </Stack.Navigator>
  );
};
