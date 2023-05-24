import React from "react";
import { Alert, Modal as RNmodal, StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";
import Button from "./Button";
import TextInput from "./TextInput";
import { TextInput as MaterialTI } from "react-native-paper";

const Modal = ({ modalVisible, setModalVisible, children, title }) => {
  return (
    <RNmodal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>
          {children}
        </View>
      </View>
    </RNmodal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: theme.font.size.sm,
    fontWeight: theme.font.weight.bold,
  },
});

export default Modal;
