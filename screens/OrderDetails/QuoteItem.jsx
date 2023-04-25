import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../styles/theme";
import Button from "../../components/ui/Button";

const QuoteItem = ({ item }) => {
  return (
    <View style={styles.quoteItem}>
      <View>
        <View style={{ justifyContent: "space-between" }}>
          <Text style={styles.quoteInfo}>
            Created by: {item.createdBy.fullName || item.createdBy.email}
          </Text>
          <Text style={styles.quoteInfo}>Price: {item.quotePrice}</Text>
          <Text style={styles.quoteInfo}>
            Estimated time for delivery: {item.timeEstimate + " days"}
          </Text>
        </View>
        <Text style={{ fontSize: theme.font.size.sm }}>{item.comment}</Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Button>Accept</Button>
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
