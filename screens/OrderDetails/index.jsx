import { StyleSheet, Text, View } from "react-native";
import { API_URL } from "../../apiConfig";
import React, { useEffect, useState } from "react";
import { theme } from "../../styles/theme";
import { useGlobalContext } from "../../context";
import OrderQuotes from "./OrderQuotes";
import GeneralOrderInfo from "./GeneralOrderInfo";
import BaseUserOrderDetails from "./BaseUser";
import CourierOrderDetails from "./Courier";

const OrderDetails = ({ route }) => {
  const { user } = useGlobalContext();
  const [orderQuotes, setOrderQuotes] = useState([]);
  const [quotesLoading, setQuotesLoading] = useState(true);
  const data = route.params;

  const fetchOrderQuotes = async () => {
    try {
      const response = await API_URL.get(`quote/quotesBy/${data._id}`);
      console.log("quotes response: ", response.data);
      setOrderQuotes(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setQuotesLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderQuotes();
  }, []);

  if (user.role === "USER")
    return (
      <BaseUserOrderDetails orderDetails={data} orderQuotes={orderQuotes} />
    );

  if (user.role === "COURIER") {
    return (
      <CourierOrderDetails
        orderDetails={data}
        orderQuotes={orderQuotes}
        quotesLoading={quotesLoading}
      />
    );
  }

  return (
    <View style={styles.container}>
      <GeneralOrderInfo order={data} />
      <OrderQuotes quotes={orderQuotes} quotesLoading={quotesLoading} />
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: theme.font.size.xl,
    marginHorizontal: theme.font.size.sm,
  },
  hStack: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
