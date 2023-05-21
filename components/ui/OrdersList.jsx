import { StyleSheet, Text, View, FlatList } from "react-native";
import { theme } from "../../styles/theme";
import OrderItem from "./OrderItem";
import React from "react";

const OrdersList = ({ orders, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        data={orders}
        horizontal
        renderItem={({ item }) => <OrderItem item={item} />}
        showsHorizontalScrollIndicator={false}
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
    fontSize: theme.font.size.sm,
    marginBottom: theme.font.size.sm,
    fontWeight: theme.font.weight.bold,
    paddingHorizontal: theme.font.spacing.xxs,
  },
});
