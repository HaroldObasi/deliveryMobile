import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../../styles/theme";
import React from "react";

const OrderItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.orderItem}>
      <Text style={styles.text}>From: {item.pickupPoint.shortName}</Text>
      <Text style={styles.text}>To: {item.destination.shortName} </Text>
      <Text style={styles.text}>
        Order Status:
        {item.delivered === true ? (
          <Text> Delivered </Text>
        ) : (
          <Text> Ongoing </Text>
        )}{" "}
      </Text>
      <Text style={styles.text}>Description: {item.description}</Text>
    </TouchableOpacity>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItem: {
    marginBottom: theme.font.size.md,
    padding: theme.font.size.md,
    borderRadius: theme.font.size.xs,
    backgroundColor: theme.colors.primary.light,
  },
  text: {
    fontSize: theme.font.size.sm,
  },
});
