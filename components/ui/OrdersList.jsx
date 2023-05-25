import { StyleSheet, Text, View, FlatList } from "react-native";
import { theme } from "../../styles/theme";
import OrderItem from "./OrderItem";
import React from "react";

const OrdersList = ({ orders, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>

      {orders.length > 0 ? (
        <FlatList
          data={orders}
          horizontal
          renderItem={({ item }) => <OrderItem item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View
          style={{
            backgroundColor: theme.colors.error.light,
            padding: 10,
            borderRadius: 8,
            marginVertical: 5,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: theme.colors.error.dark,
            }}
          >
            No orders :(
          </Text>
        </View>
      )}
    </View>
  );
};

export default OrdersList;

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.font.size.xl,
  },
  heading: {
    fontSize: theme.font.size.sm,
    marginBottom: theme.font.size.sm,
    fontWeight: theme.font.weight.bold,
    paddingHorizontal: theme.font.spacing.xxs,
  },
});
