import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { Chip } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const OrderItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.orderItem}
      onPress={() => navigation.navigate("OrderDetails", item)}
    >
      <Text
        style={{
          fontSize: theme.font.size.xs,
          fontWeight: theme.font.weight.light,
        }}
      >
        Order ID: {item._id}{" "}
      </Text>
      <View style={styles.address}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            ...styles.text,
            flex: 1,
            fontWeight: theme.font.weight.bold,
            textAlign: "left",
          }}
        >
          {item.pickupPoint.shortName}
        </Text>

        <MaterialCommunityIcons
          name="truck-fast-outline"
          size={24}
          color="black"
          style={{
            flex: 1,
            textAlign: "center",
          }}
        />

        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            ...styles.text,
            fontWeight: theme.font.weight.bold,
            flex: 1,
            textAlign: "right",
          }}
        >
          {item.destination.shortName}{" "}
        </Text>
      </View>

      {item.delivered === true ? (
        <Chip>Delivered!</Chip>
      ) : (
        <Chip
          icon="information"
          style={{
            backgroundColor: theme.colors.success.light,
            flexDirection: "row",
            justifyContent: "center",
            // flex: 1,
          }}
        >
          <Text style={{ textAlign: "center", marginHorizontal: "auto" }}>
            Order
          </Text>
        </Chip>
      )}

      <Text style={styles.text}>
        Order Status:
        {item.delivered === true ? (
          <Text> Delivered </Text>
        ) : (
          <Text> Ongoing </Text>
        )}{" "}
      </Text>

      <Text multiline style={styles.text}>
        Description: {item.description}
      </Text>
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
    width: 300,
    marginHorizontal: theme.font.spacing.sm,
  },
  text: {
    fontSize: theme.font.size.sm,
  },
  address: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.font.spacing.xxs,
  },
});
