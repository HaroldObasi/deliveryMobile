import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../../styles/theme";
// import { Button } from "react-native-paper";
import Button from "../../../components/ui/Button";
import { acceptApplication } from "./helpers";
import { useGlobalContext } from "../../../context";

const ApplicationItem = ({ item, reloadFunction }) => {
  const { user } = useGlobalContext();
  return (
    <View style={styles.quoteItem}>
      <View>
        <View style={{ justifyContent: "space-between" }}>
          <Text style={styles.quoteInfo}>
            Created by: {item.createdBy.fullName || item.createdBy.email}
          </Text>
          <Text style={styles.quoteInfo}>Email: {item.createdBy.email}</Text>
        </View>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Button
          onPress={() => acceptApplication(item._id, user, reloadFunction)}
        >
          Accept
        </Button>
      </View>
    </View>
  );
};

export default ApplicationItem;

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
    alignItems: "center",
  },
  quoteInfo: {
    fontSize: theme.font.size.xs,
  },
});
