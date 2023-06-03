import { StyleSheet, Text, View } from "react-native";
import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/ui/TextInput";
import React, { useState } from "react";
import { useGlobalContext } from "../../../context";
import { submitQuote } from "./helpers";

const QuoteForm = ({ orderDetails }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useGlobalContext();

  const [comment, setComment] = useState("");
  const [quotePrice, setQuotePrice] = useState(0);
  const [timeEstimate, setTimeEstimate] = useState(0);

  const handleSubmit = () => {
    console.log("james lannister");
    const formData = {
      comment,
      quotePrice,
      timeEstimate,
      createdBy: {
        fullName: user.fullName,
        email: user.email,
        _id: user._id,
      },
    };
    submitQuote(formData, orderDetails);
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Button
        onPress={() => {
          setModalVisible(true);
        }}
      >
        Make quote
      </Button>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={"Make a quote for this order"}
      >
        <TextInput label="Comment" onChangeText={(text) => setComment(text)} />
        <TextInput
          label="Quote Price ($)"
          onChangeText={(text) => setQuotePrice(text)}
        />
        <TextInput
          label="Time estimate (days)"
          onChangeText={(text) => setTimeEstimate(text)}
        />
        <Button onPress={handleSubmit}>
          <Text style={styles.textStyle}>Submit</Text>
        </Button>
      </Modal>
    </View>
  );
};

export default QuoteForm;

const styles = StyleSheet.create({});
