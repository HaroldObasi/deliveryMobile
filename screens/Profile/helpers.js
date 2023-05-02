import { API_URL } from "../../apiConfig";
import { removeObjectFromCache } from "../../utiils/caching";

export const signout = async (setUser) => {
  try {
    // await API_URL.get("signout");
    removeObjectFromCache("user");
    setUser(null);
    alert("Successfully signed out");
  } catch (error) {
    console.error(error);
    alert("Cant signout");
  }
};
