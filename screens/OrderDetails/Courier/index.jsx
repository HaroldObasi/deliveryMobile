import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GeneralOrderInfo from "../GeneralOrderInfo";
import { theme } from "../../../styles/theme";
import QuoteForm from "./QuoteForm";
import { hasUserQuotedOrder } from "./helpers";
import { useGlobalContext } from "../../../context";
import UserMap from "../UserMap";

const CourierOrderDetails = ({ orderDetails, orderQuotes, quotesLoading }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useGlobalContext();
  console.log("order details: ", orderDetails);
  return (
    <View style={styles.container}>
      <GeneralOrderInfo order={orderDetails} />

      {hasUserQuotedOrder(orderQuotes, user) ? (
        orderDetails?.assignedCourier?._id === user._id ? (
          <UserMap />
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
              You have already quoted the order, you will be notified if you get
              accepted
            </Text>
          </View>
        )
      ) : (
        <QuoteForm orderDetails={orderDetails} />
      )}
    </View>
  );
};

export default CourierOrderDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: theme.font.size.xl,
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
