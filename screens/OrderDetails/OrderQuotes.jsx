import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import QuoteItem from "./QuoteItem";
import { ActivityIndicator } from "react-native-paper";

const OrderQuotes = ({ quotes, quotesLoading }) => {
  return (
    <View style={{ marginVertical: 15 }}>
      {quotesLoading ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Quotes loading...</Text>
          <ActivityIndicator />
        </View>
      ) : (
        <></>
      )}

      {quotes.length > 0 ? (
        <View>
          <Text style={{ marginBottom: 5 }}>Quotes made on this order</Text>
          <FlatList
            data={quotes}
            renderItem={({ item }) => <QuoteItem item={item} />}
          />
        </View>
      ) : (
        <Text>No quotes have been made on this order</Text>
      )}
    </View>
  );
};

export default OrderQuotes;

const styles = StyleSheet.create({});
