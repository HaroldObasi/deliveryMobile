import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../../private";
import { theme } from "../../styles/theme";

const CreateOrder = () => {
  const [pickupPoint, setUpPickupPoint] = useState({});

  return (
    <GooglePlacesAutocomplete
      placeholder="Pickup"
      minLength={2}
      onFail={(err) => console.error(err)}
      fetchDetails={true}
      listViewDisplayed="auto"
      onPress={(data, details = true) => {
        console.log("i am here", data, details);
      }}
      query={{
        key: GOOGLE_API_KEY,
        language: "en",
      }}
    />
  );
};

export default CreateOrder;

const styles = StyleSheet.create({
  heading: {
    color: theme.colors.text.header,
    fontSize: theme.font.size.md,
    marginBottom: 3,
  },
});
