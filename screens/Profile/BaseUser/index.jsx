import { View, Text, SafeAreaView } from "react-native";
import { useGlobalContext } from "../../../context";
import React from "react";
import InfoCard from "../InfoCard";

const BaseUser = () => {
  const { user } = useGlobalContext();
  return (
    <SafeAreaView>
      <InfoCard />
      <View>
        <Text>Orders Creat</Text>
      </View>
    </SafeAreaView>
  );
};

export default BaseUser;
