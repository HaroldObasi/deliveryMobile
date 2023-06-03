import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ApplicationItem from "./ApplicationItem";
import { theme } from "../../../styles/theme";

const ApplicationList = ({ applications, reloadFunction }) => {
  return (
    <View>
      <Text style={{ paddingBottom: 10 }}>All Courier Applications</Text>
      {applications && applications.length > 0 ? (
        <FlatList
          data={applications}
          renderItem={({ item }) => (
            <ApplicationItem item={item} reloadFunction={reloadFunction} />
          )}
        />
      ) : (
        <View
          style={{
            backgroundColor: theme.colors.error.light,
            padding: 10,
            borderRadius: 8,
            marginVertical: 5,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: theme.colors.error.dark,
            }}
          >
            No Applications :(
          </Text>
        </View>
      )}
    </View>
  );
};

export default ApplicationList;

const styles = StyleSheet.create({});
