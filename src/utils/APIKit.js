import axios from "axios";

export let API_ENDPOINT = undefined;
if (process.env.CI_CD_STAGE === "production")
  API_ENDPOINT = `https://${process.env.REACT_APP_BASE_API_ENDPOINT}`;
else API_ENDPOINT = `http://${process.env.REACT_APP_BASE_API_ENDPOINT}`;

// Create axios client, pre-configured with baseURL
export const createAPIKit = async () => {
  let APIKit = axios.create({
    baseURL: API_ENDPOINT,
    timeout: 10000,
    headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
  });

  return APIKit;
};

const createErrorStr = (error) => {
  console.log("NETWORK ERROR");
  if (error.response) {
    // Request made and server responded
    console.log("ERROR DATA", error.response.data);
    console.log("ERROR STATUS", error.response.status);
    if (error.response.status >= 500) return "Server Error";
    else return error.response.data.detail;
  } else if (error.request) {
    // The request was made but no response was received
    console.log("The request was made but no response was received");
    return "No Internet Connection";
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("ERROR MESSAGE", error.message);
    return error.message;
  }
};

export const handleAPIError = (error) => {
  if (!axios.isCancel(error)) {
    const errorStr = createErrorStr(error);
    return errorStr;
  }
};
