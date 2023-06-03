import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import InfoCard from "../InfoCard";
import { useGlobalContext } from "../../../context";
import { FAB } from "react-native-paper";
import { signout } from "../helpers";
import { theme } from "../../../styles/theme";

const AdminProfile = () => {
  const { user, setUser } = useGlobalContext();
  return (
    <SafeAreaView style={styles.container}>
      <InfoCard />
      <FAB icon="power" style={styles.fab} onPress={() => signout(setUser)} />
    </SafeAreaView>
  );
};

export default AdminProfile;

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
