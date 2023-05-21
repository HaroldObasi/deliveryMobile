import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { Chip as MaterialC } from "react-native-paper";
import Chip from "./Chip";
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
          color={theme.colors.primary.main}
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

      {
        item.delivered === true ? (
          <Chip status={"Order delivered"}> </Chip>
        ) : item.assignedCourier._id === null ? (
          <Chip status={"Awaiting delivery"}> </Chip>
        ) : (
          <Chip status={"Courier assigned"}> </Chip>
        )
        // <Chip status={"Order awaiting delivery"}> </Chip>
      }

      <Text style={styles.description}>Description: {item.description}</Text>
    </TouchableOpacity>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItem: {
    marginBottom: theme.font.size.md,
    padding: theme.font.size.md,
    borderRadius: theme.font.size.xs,
    borderColor: theme.colors.error.light,
    borderWidth: 1,
    backgroundColor: "#E6E6E6",
    width: 300,
    marginHorizontal: theme.font.spacing.xs,
  },
  text: {
    fontSize: theme.font.size.sm,
  },
  description: {
    fontSize: theme.font.size.xs,
  },
  address: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.font.spacing.xxs,
  },
});
