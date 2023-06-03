import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import GeneralOrderInfo from "../GeneralOrderInfo";
import { theme } from "../../../styles/theme";
import QuoteForm from "./QuoteForm";
import { hasUserQuotedOrder } from "./helpers";
import { useGlobalContext } from "../../../context";
import { useNavigation } from "@react-navigation/native";
import UserMap from "../UserMap";

const CourierOrderDetails = ({ orderDetails, orderQuotes, quotesLoading }) => {
  const { user } = useGlobalContext();
  console.log("order details: ", orderDetails);
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <GeneralOrderInfo order={orderDetails} />
        {hasUserQuotedOrder(orderQuotes, user) ? (
          orderDetails?.assignedCourier?._id === user._id ? (
            orderDetails.delivered === true ? (
              <View
                style={{
                  backgroundColor: theme.colors.success.light,
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                  borderRadius: 8,
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: theme.colors.success.dark,
                  }}
                >
                  You have successfully delivered this order, Congrats !
                </Text>
              </View>
            ) : (
              <UserMap
                region={{
                  origin: {
                    longitude: orderDetails.pickupPoint.long,
                    latitude: orderDetails.pickupPoint.lat,
                  },
                  destination: {
                    longitude: orderDetails.destination.long,
                    latitude: orderDetails.destination.lat,
                  },
                }}
                orderDetails={orderDetails}
              />
            )
          ) : (
            <View
              style={{
                backgroundColor: theme.colors.error.light,
                padding: 10,
                borderRadius: 8,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: theme.colors.error.dark,
                }}
              >
                You have already quoted the order, you will be notified if you
                get accepted
              </Text>
            </View>
          )
        ) : (
          <QuoteForm orderDetails={orderDetails} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourierOrderDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
