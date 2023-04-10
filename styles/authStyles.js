import { StyleSheet, Text, View } from "react-native";

const authStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    fontSize: 32,
    color: "#E05D5D",
    textAlign: "center",
  },
  input: {
    marginTop: 12,
  },
  buttonholder: {
    marginTop: 20,
  },
  button: {
    width: 220,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#E05D5D",
    borderRadius: 14,
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  button1: {
    marginTop: 20,
  },
  button2: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#C76B70",
    borderRadius: 8,
    width: 100,
    padding: 8,
    alignItems: "center",
  },
  alt: {
    paddingVertical: 15,
    alignSelf: "center",
  },
});

export default authStyles;
