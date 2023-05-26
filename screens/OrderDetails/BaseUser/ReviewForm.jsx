import { StyleSheet, Text, View, Alert } from "react-native";
import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/ui/TextInput";
import React, { useState } from "react";
import Stars from "react-native-stars";
import { useGlobalContext } from "../../../context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { API_URL } from "../../../apiConfig";

const ReviewForm = ({ orderDetails }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useGlobalContext();

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(3);

  const handleSubmit = async () => {
    const assignedCourierId = orderDetails.assignedCourier._id;
    const createdBy = {
      name: orderDetails.createdBy.name,
      email: orderDetails.createdBy.email,
      _id: orderDetails.createdBy.id,
    };

    const payload = {
      createdBy,
      orderRated: orderDetails._id,
      comment,
      rating,
    };

    try {
      const response = await API_URL.post(
        `rating/create/${assignedCourierId}`,
        payload
      );
      Alert.alert("Successfully made review");
    } catch (error) {
      Alert.alert("Something went wrong");
      console.error(error);
    } finally {
      setModalVisible(false);
    }
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
        title={`Give a rating for this delivery`}
      >
        <View style={{ paddingBottom: 15 }}>
          <Stars
            default={rating}
            count={5}
            update={(val) => setRating(val)}
            fullStar={
              <MaterialCommunityIcons
                name="star"
                size={30}
                style={[styles.myStarStyle]}
              />
            }
            emptyStar={
              <MaterialCommunityIcons
                name="star-outline"
                size={30}
                style={[styles.myStarStyle, styles.myEmptyStarStyle]}
              />
            }
          />

          <TextInput
            label="Comment"
            onChangeText={(text) => setComment(text)}
          />
        </View>

        <Button onPress={handleSubmit}>
          <Text style={styles.textStyle}>Submit</Text>
        </Button>
      </Modal>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({
  myStarStyle: {
    color: "yellow",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: "white",
  },
});
