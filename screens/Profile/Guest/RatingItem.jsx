import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Stars from "react-native-stars";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../../styles/theme";

const RatingItem = ({ item }) => {
  console.log("item: ", item);
  return (
    <View style={styles.container}>
      <Text>Created by: {item.createdBy.email}</Text>
      <Stars
        default={item?.rating}
        count={5}
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
      <Text>{item?.comment}</Text>
    </View>
  );
};

export default RatingItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: theme.colors.primary.main,
    borderRadius: 8,
    paddingHorizontal: theme.font.spacing.xs,
    paddingVertical: theme.font.spacing.xs,
  },
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
