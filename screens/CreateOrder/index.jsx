import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../../private";
import { theme } from "../../styles/theme";
import TextInput from "../../components/ui/TextInput";
import MapsACI from "../../components/ui/MapsACI";
import { useGlobalContext } from "../../context";
import { TextInput as RnTextInput } from "react-native";

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

  return (
    <ScrollView
      style={styles.container}
      // scrollEnabled={false}
      keyboardShouldPersistTaps="handled"
    >
      <Text>Add your package's information</Text>
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
      <MapsACI placeholder="Pickup point" />

      {/* <MapsACI placeholder="Destination" />  */}
    </ScrollView>
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
