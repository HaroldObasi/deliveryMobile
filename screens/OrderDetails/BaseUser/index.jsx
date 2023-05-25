import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import GeneralOrderInfo from "../GeneralOrderInfo";
import { theme } from "../../../styles/theme";
import { useGlobalContext } from "../../../context";
import { useNavigation } from "@react-navigation/native";

const BaseUserOrderDetails = ({ orderDetails, orderQuotes }) => {
  const { user } = useGlobalContext();
  return (
    <View>
      <Text>BaseUserOrderDetails</Text>
    </View>
  );
};

export default BaseUserOrderDetails;

const styles = StyleSheet.create({});
