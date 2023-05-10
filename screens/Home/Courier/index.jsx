import { View, Text, StyleSheet, FlatList } from "react-native";
import { theme } from "../../../styles/theme";
import { useGlobalContext } from "../../../context";
import { useEffect, useState } from "react";
import OrdersList from "../../../components/ui/OrdersList";
import { ActivityIndicator } from "react-native-paper";
import SkeletonLoader from "../../../components/ui/SkeletonLoader";
import { formatDate } from "../../../utiils/dates";
import { API_URL } from "../../../apiConfig";

const CourierHome = () => {
  const { user, setUser } = useGlobalContext();
  const [openOrders, setOpenOrders] = useState([]);
  const [openOrdersLoading, setOpenOrdersLoading] = useState(true);

  const [activeOrders, setActiveOrders] = useState([]);
  const [activeOrdersLoading, setActiveOrdersLoading] = useState(true);

  const getOpenOrders = async () => {
    try {
      const response = await API_URL.get(`package/all?open=true`);
      setOpenOrders(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setOpenOrdersLoading(false);
    }
  };

  const getActiveOrders = async () => {
    try {
      const courierId = user._id;
      const response = await API_URL.get(`package/active/${courierId}`);
      setActiveOrders(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setActiveOrdersLoading(false);
    }
  };

  useEffect(() => {
    getOpenOrders();
    getActiveOrders();
  }, []);

  return (
    <View>
      <View style={styles.titleLine}>
        <Text style={styles.title}>Welcome {user.fullName}</Text>
        <Text>{formatDate(Date.now())} </Text>
      </View>

      <Text>Open orders</Text>
      <OrdersList orders={openOrders} />
      <SkeletonLoader />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: theme.font.size.md,
    fontWeight: theme.font.weight.bold,
  },
  titleLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.font.spacing.md,
    paddingHorizontal: theme.font.spacing.xxs,
  },
});

export default CourierHome;
