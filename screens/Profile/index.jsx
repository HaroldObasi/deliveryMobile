import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useGlobalContext } from "../../context";
import BaseUser from "./BaseUser";
import Courier from "./Courier";
import AdminProfile from "./Admin";

const Profile = () => {
  const { user } = useGlobalContext();

  if (user.role === "USER") {
    return <BaseUser />;
  }
  if (user.role === "COURIER") {
    return <Courier />;
  }
  if (user.role === "ADMIN") {
    return <AdminProfile />;
  }

  return (
    <SafeAreaView>
      <Text>user email {user.email}</Text>
      <Text>user fullname {user.fullName}</Text>
      <Text>user role: {user.role}</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
