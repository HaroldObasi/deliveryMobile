import React from "react";
import {
  Alert,
  Modal as RNmodal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../styles/theme";
import { IconButton } from "react-native";
import Button from "./Button";
import TextInput from "./TextInput";
import { TextInput as MaterialTI } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={styles.modalText}>{title}</Text>

              <TouchableOpacity
                style={{ align: "flex-end" }}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <MaterialCommunityIcons name="close" color="black" size={24} />
              </TouchableOpacity>
            </View>
          </View>
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
    flex: 1,
    textAlign: "center",
    fontSize: theme.font.size.sm,
    fontWeight: theme.font.weight.bold,
  },
});

export default Modal;
