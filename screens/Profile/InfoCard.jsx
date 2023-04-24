import { StyleSheet, Text, View } from "react-native";
import { useGlobalContext } from "../../context";
import React from "react";
import { Avatar } from "react-native-paper";
import { Button } from "react-native-paper";

const InfoCard = () => {
  const { user } = useGlobalContext();
  return (
    <View>
      <Avatar.Text size={70} label="XD" />
      <Text>{user.fullName}</Text>
      {user.role === "USER" ? (
        <Button mode="contained">Request Courier aaccess</Button>
      ) : (
        <>This user is a Courier</>
      )}
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({});
