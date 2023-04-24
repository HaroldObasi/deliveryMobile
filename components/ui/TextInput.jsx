import { StyleSheet, Text, View } from "react-native";
import { TextInput as MaterialTI } from "react-native-paper";
import { theme } from "../../styles/theme";
import React, { useState } from "react";

const TextInput = (props) => {
  return (
    <MaterialTI
      {...props}
      style={styles.input}
      activeOutlineColor={theme.colors.primary.main}
      mode="outlined"
      outlineColor={theme.colors.grey[300]}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
  },
});
