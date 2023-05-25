import { StyleSheet, Text, View, Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import React, { useRef, useEffect, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from "../../private";
import { theme } from "../../styles/theme";
import Button from "../../components/ui/Button";
import { API_URL } from "../../apiConfig";
import { useGlobalContext } from "../../context";
import { useNavigation } from "@react-navigation/native";

const UserMap = ({ region, orderDetails }) => {
  const navigation = useNavigation();
  console.log("region: ", region);
  const mapRef = useRef(null);

  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});

  const handleOrderComplete = async () => {
    try {
      const response = await API_URL.post(
        `package/complete/${orderDetails._id}`,
        {
          courierId: orderDetails.assignedCourier._id,
        }
      );
      navigation.goBack();
      Alert.alert("Order has been completed");
    } catch (error) {
      Alert.alert("Something went wrong");
      console.error(error);
    }
  };

  useEffect(() => {
    const edgePaddingValue = 90;

    const edgePadding = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    };
    mapRef.current?.fitToCoordinates(
      [region.origin, region.destination],
      edgePadding
    );
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} ref={mapRef}>
        <MapViewDirections
          origin={{
            latitude: region.origin.latitude,
            longitude: region.origin.longitude,
          }}
          destination={{
            latitude: region.destination.latitude,
            longitude: region.destination.longitude,
          }}
          apikey={GOOGLE_API_KEY}
          strokeColor={theme.colors.primary.main}
          strokeWidth={3}
        />
      </MapView>
      <View style={{ marginVertical: 10 }}>
        <Button onPress={handleOrderComplete}>Mark Order as complete</Button>
      </View>
    </View>
  );
};

export default UserMap;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  map: {
    width: "100%",
    height: 400,
  },
});
