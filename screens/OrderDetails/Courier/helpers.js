import { API_URL } from "../../../apiConfig";

export const hasUserQuotedOrder = (orderQuotes, user) => {
  for (let i of orderQuotes) {
    if (user._id === i?.createdBy?._id) {
      return true;
    }
  }
  return false;
};

export const submitQuote = async (values, orderDetails) => {
  try {
    const response = await API_URL.post(
      `quote/create/${orderDetails._id}`,
      values
    );
    console.log("quote created");
  } catch (error) {
    console.log(error);
  }
};
