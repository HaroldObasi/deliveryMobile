import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Chip = ({ status }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="clock-alert-outline"
        color="black"
        size={24}
        style={{}}
      />
      <Text style={styles.text}>{status}</Text>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.error.light,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",

    alignItems: "center",
  },

  text: {
    fontWeight: theme.font.weight.bold,
  },
});
