import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useGlobalContext } from "../../context";
import BaseUser from "./BaseUser";
import CourierHome from "./Courier";
import Admin from "./Admin";

const Home = () => {
  const { user } = useGlobalContext();

  if (user.role === "USER") {
    return <BaseUser />;
  }
  if (user.role === "COURIER") {
    return <CourierHome />;
  }
  if (user.role === "ADMIN") {
    return <Admin />;
  }

  return (
    <SafeAreaView>
      <Text>Home page</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
