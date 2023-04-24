import { StyleSheet, Text, View } from "react-native";
import { Button as MaterialB } from "react-native-paper";
import { theme } from "../../styles/theme";
import React from "react";

const Button = (props) => {
  return (
    <MaterialB
      {...props}
      buttonColor={theme.colors.primary.main}
      style={styles.button}
      mode="contained"
    >
      {props.children}
    </MaterialB>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    // backgroundColor: theme.colors.primary.main,
  },
});
