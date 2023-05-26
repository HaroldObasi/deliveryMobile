import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useGlobalContext } from "../../../context";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../apiConfig";
import InfoCard from "../InfoCard";
import OrdersList from "../../../components/ui/OrdersList";
import { FAB } from "react-native-paper";
import { theme } from "../../../styles/theme";
import { signout } from "../helpers";

const BaseUser = () => {
  const { user, setUser } = useGlobalContext();
  const [userPackages, setUserPackages] = useState([]);

  const fetchUserPackages = async () => {
    try {
      const response = await API_URL.get(`package/packagesByUser/${user._id}`);
      setUserPackages(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("user packages fetched");
    }
  };

  useEffect(() => {
    fetchUserPackages();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <InfoCard />
      <OrdersList title={"All your previous orders"} orders={userPackages} />
      <FAB icon="power" style={styles.fab} onPress={() => signout(setUser)} />
    </SafeAreaView>
  );
};

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

export default BaseUser;
