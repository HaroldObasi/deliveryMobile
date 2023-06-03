import { API_URL } from "../../../apiConfig";

export const getOpenApplications = async (setApplications) => {
  try {
    const response = await API_URL.get("application/all?open=true");
    setApplications(response.data);
  } catch (error) {
    console.log(error);
    Alert.alert("Something went wrong");
  }
};

export const acceptApplication = async (
  applicationId,
  user,
  reloadFunction
) => {
  try {
    await API_URL.post(`application/confirmApplication/${applicationId}`, user);
    console.log("Successfully accepted application");
    reloadFunction();
  } catch (error) {
    console.log("Failed to accept application");
  }
};
