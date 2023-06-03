import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import GeneralOrderInfo from "../GeneralOrderInfo";
import { theme } from "../../../styles/theme";
import { useGlobalContext } from "../../../context";
import { useNavigation } from "@react-navigation/native";
import OrderQuotes from "../OrderQuotes";
import ReviewForm from "./ReviewForm";

const BaseUserOrderDetails = ({ orderDetails, orderQuotes }) => {
  return (
    <View style={styles.container}>
      <GeneralOrderInfo order={orderDetails} />

      {orderDetails && orderDetails.assignedCourier._id !== null ? (
        orderDetails.delivered === true ? (
          <ReviewForm orderDetails={orderDetails} />
        ) : (
          <Text>Order is in progress</Text>
        )
      ) : (
        <OrderQuotes quotes={orderQuotes} />
      )}
    </View>
  );
};

export default BaseUserOrderDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginHorizontal: theme.font.size.sm,
  },
});
