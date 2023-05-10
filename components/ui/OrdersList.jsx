import { StyleSheet, Text, View, FlatList } from "react-native";
import { theme } from "../../styles/theme";
import OrderItem from "./OrderItem";
import React from "react";

const OrdersList = ({ orders }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Orders Created</Text>
      <FlatList
        data={orders}
        horizontal
        renderItem={({ item }) => <OrderItem item={item} />}
      />
    </View>
  );
};

export default OrdersList;

const styles = StyleSheet.create({
  container: {
    marginTop: theme.font.size.xl,
    // marginHorizontal: theme.font.size.sm,
  },
  heading: {
    textAlign: "center",
    fontSize: theme.font.size.lg,
    marginBottom: theme.font.size.sm,
  },
});
