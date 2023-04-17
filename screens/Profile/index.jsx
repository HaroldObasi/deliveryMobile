import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useGlobalContext } from "../../context";

const Profile = () => {
  const { user } = useGlobalContext();
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
