import { StyleSheet, Text, View } from "react-native";
import { API_URL } from "../../apiConfig";
import React, { useEffect, useState } from "react";
import { theme } from "../../styles/theme";
import { useGlobalContext } from "../../context";
import OrderQuotes from "./OrderQuotes";

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

  return (
    <View style={styles.container}>
      <View style={styles.hStack}>
        <Text>
          <Text style={{ color: theme.colors.primary.main }}>From: </Text>
          {data.pickupPoint.shortName}
        </Text>
        <Text>
          {" "}
          <Text style={{ color: theme.colors.primary.main }}>To: </Text>{" "}
          {data.destination.shortName}
        </Text>
      </View>
      {user.role === "USER" ? (
        data.assignedCourier._id === null ? (
          <Text style={{ marginVertical: 5 }}>No couriers assigned</Text>
        ) : (
          <Text style={{ marginVertical: 5 }}>
            Assigned courier: {data.assignedCourier.fullName}
          </Text>
        )
      ) : (
        <Text>a courier</Text>
      )}

      <View>
        <Text>Recipient Name: {data.recipientName}</Text>
        <Text>Recipient Number: {data.recipientNumber}</Text>
      </View>

      <Text style={{ fontSize: theme.font.size.md, marginVertical: 5 }}>
        Description: {data.description}
      </Text>

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
