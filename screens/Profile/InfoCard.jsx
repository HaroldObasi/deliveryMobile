import { StyleSheet, Text, View } from "react-native";
import { useGlobalContext } from "../../context";
import React from "react";
import { Avatar } from "react-native-paper";
import { Button as MaterialB } from "react-native-paper";
import Button from "../../components/ui/Button";

const InfoCard = () => {
  const { user } = useGlobalContext();
  return (
    <View style={styles.card}>
      <Avatar.Text size={70} label={user.fullName[0]} />
      <Text>{user.fullName}</Text>
      {user.role === "USER" ? (
        <>
          <Button
            onPress={() => {
              console.log("alt button");
            }}
          >
            Request courier access
          </Button>
        </>
      ) : (
        <>This user is a Courier</>
      )}
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
