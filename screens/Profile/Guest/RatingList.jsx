import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import RatingItem from "./RatingItem";

const RatingList = ({ ratings }) => {
  return (
    <View>
      <Text style={{ marginBottom: 5 }}>Ratings</Text>
      {ratings?.length === 0 ? (
        <Text>No ratings have been made for this User</Text>
      ) : (
        <FlatList
          data={ratings}
          renderItem={({ item }) => <RatingItem item={item} />}
        />
      )}
    </View>
  );
};

export default RatingList;

const styles = StyleSheet.create({});
