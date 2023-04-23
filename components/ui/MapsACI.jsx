import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GOOGLE_API_KEY } from "../../private";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const MapsACI = (props) => {
  return (
    <GooglePlacesAutocomplete
      {...props}
      styles={{
        textInput: {
          color: "#5d5d5d",
          fontSize: 15,
          paddingHorizontal: 15,
          height: 50,
          borderWidth: 1,
          borderColor: "grey",
        },
        predefinedPlacesDescription: {
          color: "#1faadb",
        },
      }}
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

export default MapsACI;

const styles = StyleSheet.create({});
