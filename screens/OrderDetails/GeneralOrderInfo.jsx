import { StyleSheet, Text, View } from "react-native";
import { useGlobalContext } from "../../context";
import React from "react";
import { theme } from "../../styles/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const GeneralOrderInfo = ({ order }) => {
  console.log("order data nest: ", order);
  const { user } = useGlobalContext();
  return (
    <View>
      <View style={{ ...styles.hStack, fontWeight: theme.font.weight.light }}>
        <Text style={{ fontWeight: theme.font.weight.light }}>
          Tracking ID:{" "}
        </Text>

        <Text style={{ fontWeight: theme.font.weight.light }}>
          {order?._id}
        </Text>
      </View>

      <View style={styles.address}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            From: {order?.createdBy?.name || order?.createdBy?.email}
          </Text>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={{
              fontSize: theme.font.size.sm,
              fontWeight: theme.font.weight.bold,
            }}
          >
            {order?.pickupPoint?.shortName}
          </Text>
        </View>

        <EvilIcons
          style={{
            flex: 1,
            textAlign: "center",
          }}
          color={theme.colors.primary.main}
          name="arrow-right"
          size={40}
        />

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 12,
              textAlign: "right",
            }}
          >
            To: {order?.recipientName}
          </Text>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={{
              fontWeight: theme.font.weight.bold,
              fontSize: theme.font.size.sm,
              textAlign: "right",
            }}
          >
            {order?.destination?.shortName}
          </Text>
        </View>
      </View>

      {user.role === "USER" ? (
        order?.assignedCourier?._id === null ? (
          <Text style={{ marginVertical: 5 }}>No couriers assigned</Text>
        ) : (
          <Text style={{ marginVertical: 5 }}>
            Assigned courier: {order?.assignedCourier?.fullName}
          </Text>
        )
      ) : (
        <Text>a courier</Text>
      )}

      <View>
        <Text>Recipient Number: {order?.recipientNumber}</Text>
      </View>

      <Text
        style={{
          fontSize: theme.font.size.md,
          marginVertical: 5,
          fontStyle: "italic",
        }}
      >
        Description: {order?.description}
      </Text>
    </View>
  );
};

export default GeneralOrderInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: theme.font.size.xl,
    marginHorizontal: theme.font.size.sm,
  },
  hStack: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },
  address: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.font.spacing.xxs,
  },
});