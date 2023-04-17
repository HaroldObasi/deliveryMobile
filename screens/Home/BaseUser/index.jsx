import { SafeAreaView, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const BaseUser = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Place an item for delivery and have Couriers Respond</Text>
      <Image
        style={styles.image}
        source={require("../../../assets/courier_bike.jpg")}
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate("CreateOrder")}
        style={styles.button}
      >
        Create an Order
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    justifyContent: "center",
  },
  button: {
    borderRadius: 8,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});

export default BaseUser;
