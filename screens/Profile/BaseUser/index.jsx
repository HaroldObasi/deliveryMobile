import { View, Text, SafeAreaView } from "react-native";
import { useGlobalContext } from "../../../context";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../apiConfig";
import InfoCard from "../InfoCard";
import OrdersList from "../../../components/ui/OrdersList";

const BaseUser = () => {
  const { user } = useGlobalContext();
  const [userPackages, setUserPackages] = useState([]);

  const fetchUserPackages = async () => {
    console.log("user packages being fetched");
    try {
      const response = await API_URL.get(`package/packagesByUser/${user._id}`);
      console.log("response: ", response.data);
      setUserPackages(response.data);
      console.log("user packages: ", userPackages);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("user packages fetched");
    }
  };

  useEffect(() => {
    fetchUserPackages();
  }, []);
  return (
    <SafeAreaView>
      <InfoCard />
      <OrdersList orders={userPackages} />
    </SafeAreaView>
  );
};

export default BaseUser;
