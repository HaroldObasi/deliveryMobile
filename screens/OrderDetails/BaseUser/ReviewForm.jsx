import { StyleSheet, Text, View } from "react-native";
import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/ui/TextInput";
import React, { useState } from "react";
import { useGlobalContext } from "../../../context";

const ReviewForm = ({ orderDetails }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useGlobalContext();

  const [comment, setComment] = useState("");
  const [quotePrice, setQuotePrice] = useState(0);
  const [timeEstimate, setTimeEstimate] = useState(0);

  const handleSubmit = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Button
        onPress={() => {
          setModalVisible(true);
        }}
      >
        Leave a review
      </Button>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={"Make a quote for this order"}
      >
        <Button onPress={handleSubmit}>
          <Text style={styles.textStyle}>Submit</Text>
        </Button>
      </Modal>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({});
