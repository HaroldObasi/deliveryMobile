import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { theme } from "../../styles/theme";
import Button from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
import { API_URL } from "../../apiConfig";

const QuoteItem = ({ item }) => {
  const navigation = useNavigation();

  const handleAcceptQuote = async () => {
    try {
      await API_URL.post(`quote/accept`, {
        quotedOrder: item.quotedOrder,
        courierToBeAssigned: item.createdBy._id,
      });
      Alert.alert("Quote successfully accepted");
    } catch (error) {
      Alert.alert("Something went wrong");
      console.error(error);
    } finally {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.quoteItem}>
      <View>
        <View style={{ justifyContent: "space-between" }}>
          <Text style={styles.quoteInfo}>
            Created by: {item.createdBy.fullName || item.createdBy.email}
          </Text>
          <Text style={styles.quoteInfo}>Price ($): {item.quotePrice}</Text>
          <Text style={styles.quoteInfo}>
            Estimated time for delivery: {item.timeEstimate + " days"}
          </Text>
        </View>
        <Text
          numberOfLines={3}
          style={{ fontSize: theme.font.size.sm, width: "80%" }}
          ellipsizeMode="tail"
        >
          {item.comment}
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Button onPress={handleAcceptQuote}>Accept</Button>
      </View>
    </View>
  );
};

export default QuoteItem;

const styles = StyleSheet.create({
  quoteItem: {
    paddingVertical: theme.font.size.xs,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: theme.colors.primary.main,
    paddingHorizontal: theme.font.size.sm,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quoteInfo: {
    fontSize: theme.font.size.xs,
  },
});
