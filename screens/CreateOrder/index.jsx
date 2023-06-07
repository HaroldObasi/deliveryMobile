import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../../private";
import { theme } from "../../styles/theme";
import TextInput from "../../components/ui/TextInput";
import MapsACI from "../../components/ui/MapsACI";
import { useGlobalContext } from "../../context";
import { TextInput as RnTextInput } from "react-native";
import Button from "../../components/ui/Button";
import { API_URL } from "../../apiConfig";

const CreateOrder = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("desc");

  const [recipientName, setRecipientName] = useState("");
  const [recipientNumber, setRecipientNumber] = useState(0);
  const [weight, setWeight] = useState(0);
  const [description, setDescription] = useState("");

  const [pickupPoint, setPickupPoint] = useState({
    shortName: "",
    longName: "",
    long: 0,
    lat: 0,
  });
  const [destination, setDestination] = useState({
    shortName: "",
    longName: "",
    long: 0,
    lat: 0,
  });

  const { user } = useGlobalContext();

  const handleSubmitOrder = async () => {
    try {
      orderData = {
        recipientName,
        recipientNumber,
        weight,
        pickupPoint,
        destination,
        description,
        createdBy: {
          id: user._id,
          email: user.email,
          name: user.fullName || user.email,
        },
      };
      const response = await API_URL.post("package/create", orderData);
      Alert.alert("Package successfully created");
    } catch (error) {
      console.error(error);
      Alert.alert("Something went wrong");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        // scrollEnabled={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={{}}>Add your package's information</Text>
        <TextInput
          label="Recipient Name"
          onChangeText={(text) => {
            setRecipientName(text);
          }}
        />
        <TextInput
          label="Recipient Number"
          onChangeText={(text) => {
            setRecipientNumber(text);
          }}
        />
        <TextInput
          label="Weight"
          onChangeText={(text) => {
            setWeight(text);
          }}
        />
        <TextInput
          label="Description"
          onChangeText={(text) => {
            setDescription(text);
          }}
          multiline
          numberOfLines={4}
        />
        <MapsACI placeholder="Pickup point" setLocation={setPickupPoint} />
        <MapsACI placeholder="Destination" setLocation={setDestination} />
        <Button onPress={handleSubmitOrder}>Submit</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateOrder;

const styles = StyleSheet.create({
  heading: {
    color: theme.colors.text.header,
    fontSize: theme.font.size.md,
    marginBottom: 3,
  },
  container: {
    height: "100%",
    marginHorizontal: 10,
  },
  focusedTextInput: {},
  textarea: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});
