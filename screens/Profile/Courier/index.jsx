import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../apiConfig";
import InfoCard from "../InfoCard";
import OrdersList from "../../../components/ui/OrdersList";
import { useIsFocused } from "@react-navigation/native";
import { useGlobalContext } from "../../../context";
import { FAB } from "react-native-paper";
import { signout } from "../helpers";
import { theme } from "../../../styles/theme";

const Courier = () => {
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user, setUser } = useGlobalContext();

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
    <SafeAreaView style={styles.container}>
      <InfoCard />
      <OrdersList orders={deliveredOrders} title={"Your completed orders"} />
      <FAB icon="power" style={styles.fab} onPress={() => signout(setUser)} />
    </SafeAreaView>
  );
};

export default Courier;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.error.light,
  },
});
