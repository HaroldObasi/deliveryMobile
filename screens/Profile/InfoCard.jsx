import { StyleSheet, Text, View, Alert } from "react-native";
import { useGlobalContext } from "../../context";
import React from "react";
import { Avatar } from "react-native-paper";
import { Button as MaterialB } from "react-native-paper";
import { signout } from "./helpers";
import Button from "../../components/ui/Button";
import { theme } from "../../styles/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { API_URL } from "../../apiConfig";
import { useNavigation } from "@react-navigation/native";

const InfoCard = () => {
  const { user, setUser } = useGlobalContext();
  const navigation = useNavigation();

  const handleCourierRequest = async () => {
    try {
      await API_URL.post(`application/create`, user);
      Alert.alert("Request sent successfully");
    } catch (error) {
      Alert.alert("Something went wrong");
      console.log(error);
    } finally {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.card}>
      <Avatar.Text size={70} label={user.fullName[0]} />
      <Text
        style={{
          fontSize: theme.font.size.md,
          paddingVertical: 8,
          fontWeight: theme.font.weight.bold,
        }}
      >
        {user.fullName}
      </Text>
      {user.role === "USER" ? (
        <>
          <Button onPress={handleCourierRequest}>Request courier access</Button>
        </>
      ) : (
        <Text>Role: {user.role}</Text>
      )}

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
          {user.email}
        </Text>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
});
