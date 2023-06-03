import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../apiConfig";
import ApplicationList from "./ApplicationList";
import { theme } from "../../../styles/theme";
import { formatDate } from "../../../utiils/dates";
import { useGlobalContext } from "../../../context";
import { getOpenApplications } from "./helpers";

const Admin = () => {
  const [applications, setApplications] = useState([]);
  const { user } = useGlobalContext();

  useEffect(() => {
    getOpenApplications(setApplications);
    console.log("app: ", applications);
  }, []);

  return (
    <SafeAreaView style={{ marginHorizontal: theme.font.spacing.xs }}>
      <View style={styles.titleLine}>
        <Text style={styles.title}>Welcome {user.fullName}</Text>
        <Text>{formatDate(Date.now())} </Text>
      </View>
      {applications && (
        <ApplicationList
          applications={applications}
          reloadFunction={() => {
            getOpenApplications(setApplications);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Admin;

const styles = StyleSheet.create({
  title: {
    fontSize: theme.font.size.md,
    fontWeight: theme.font.weight.bold,
  },
  titleLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.font.spacing.md,
    paddingHorizontal: theme.font.spacing.xxs,
  },
});
