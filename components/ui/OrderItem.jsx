import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import Chip from "./Chip";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useGlobalContext } from "../../context";

const OrderItem = ({ item }) => {
  const navigation = useNavigation();
  const { user } = useGlobalContext();

  console.log("user: ", user);

  const date = new Date(item.timePosted);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
    timeZoneName: "short",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

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
      <Text
        style={{
          fontSize: theme.font.size.xs,
          fontWeight: theme.font.weight.light,
        }}
      >
        Order Created: {formattedDate}
      </Text>

      {user.role === "COURIER" && (
        <Text
          style={{
            fontSize: theme.font.size.xs,
            fontWeight: theme.font.weight.light,
          }}
        >
          Client Name: {item.createdBy.name || item.createdBy.email}
        </Text>
      )}

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

      {item.delivered === true ? (
        <Chip status={"Order delivered"}> </Chip>
      ) : item.assignedCourier._id === null ? (
        <Chip status={"Awaiting delivery"}> </Chip>
      ) : (
        <Chip status={"Courier assigned"}> </Chip>
      )}

      <Text style={{ ...styles.description }}>
        <Text
          style={{
            color: "black",
            fontWeight: theme.font.weight.bold,
          }}
        >
          Description:
        </Text>{" "}
        {item.description}
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
    backgroundColor: "#E6E6E6",
    width: 300,
    marginHorizontal: theme.font.spacing.xs,

    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 2, // Android
  },
  text: {
    fontSize: theme.font.size.sm,
  },
  description: {
    fontSize: theme.font.size.xs,
    fontStyle: "italic",
    color: theme.colors.text.body,
  },
  address: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.font.spacing.xxs,
  },
});
