import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../../apiConfig";
import { Avatar } from "react-native-paper";
import { theme } from "../../../styles/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GuestInfoCard from "./GuestInfoCard";
import Stars from "react-native-stars";
import RatingList from "./RatingList";

const GuestProfile = ({ route }) => {
  const [userInfo, setUserInfo] = useState(null);
  const fetchUserInfo = async () => {
    const guestId = route.params;

    try {
      const response = await API_URL.get(`user/${guestId}`);
      setUserInfo(response.data);
      console.log("userInfo", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.card}>
        <Avatar.Text size={70} label={userInfo?.fullName[0]} />
        <Text
          style={{
            fontSize: theme.font.size.md,
            paddingVertical: 8,
            fontWeight: theme.font.weight.bold,
          }}
        >
          {userInfo?.fullName}
        </Text>

        <Text>Role: {userInfo?.role}</Text>

        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 15,
            paddingHorizontal: 15,
            borderRadius: 8,
            marginBottom: 10,
            marginTop: 20,
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color={theme.colors.text.body}
          />
          <Text
            style={{
              fontSize: 15,
              paddingLeft: 20,
              color: theme.colors.text.body,
            }}
          >
            {userInfo?.email}
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: theme.font.spacing.xs }}>
        <RatingList ratings={userInfo?.reviews} />
      </View>
    </SafeAreaView>
  );
};

export default GuestProfile;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
});
