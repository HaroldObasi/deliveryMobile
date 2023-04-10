import AsyncStorage from "@react-native-async-storage/async-storage";

export const addObjectToCache = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, value);
    console.log(key, " object set");
  } catch (error) {
    console.error("Cache Error: ", error);
  }
};

export const readObjectFromCache = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    console.error("Cache Error: ", error);
  }
};

export const removeObjectFromCache = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(key, " object removed");
  } catch (error) {
    console.error("Cache Error: ", error);
  }
};
