import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../apiConfig";
import InfoCard from "../InfoCard";
import OrdersList from "../../../components/ui/OrdersList";
import { useIsFocused } from "@react-navigation/native";
import { useGlobalContext } from "../../../context";

const Courier = () => {
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useGlobalContext();

  const isFocused = useIsFocused();

  const fetchDeliveredOrders = async () => {
    try {
      const response = await API_URL.get(
        `package/active/${user._id}?completed=true`
      );
      setDeliveredOrders(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchDeliveredOrders();
    }
  }, [isFocused]);

  return (
    <View>
      <InfoCard />
      <OrdersList orders={deliveredOrders} title={"Your completed orders"} />
    </View>
  );
};

export default Courier;

const styles = StyleSheet.create({});
