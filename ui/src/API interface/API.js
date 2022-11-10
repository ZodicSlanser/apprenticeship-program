import axios from "axios";
import { API_ROUTES } from "./Config";

//adds the apprenticeship object to the Database and assigns an ID to it
const addApprenticeship = (postData, callback) => {
  console.log(postData);
  sendRequest("POST", API_ROUTES.addApprenticeship, {
    data: postData,
  }).then(callback);
};

//returns a specific apprenticeship ID in an object
const viewApprenticeship = (id, callback) => {
  sendRequest("GET", API_ROUTES.viewApprenticeship, {
    params: { id: id },
  }).then(callback);
};
//returns all apprenticeship objects in DB in Array of JSONs
const viewAllApprenticeships = (callback) =>
  sendRequest("GET", API_ROUTES.viewAllApprenticeships).then(callback);

//fetches data from the API
const sendRequest = async (method, uri, axiosOptions) => {
  try {
    const response = await axios[method.toLowerCase()](uri, axiosOptions);
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};
const deleteApprenticeship = (id, callback) => {
  sendRequest("DELETE", API_ROUTES.deleteApprenticeship, {
    data: { id: id },
  }).then(callback);
};
const updateApprenticeship = (postData, callback) => {
  sendRequest("PUT", API_ROUTES.updateApprenticeship, { data: postData }).then(
    callback
  );
};
const addValue = (postData, callback) => {
  sendRequest("POST", API_ROUTES.addValue, { data: postData }).then(callback);
};
const duplicateApprenticeship = (postData, callback) => {
  sendRequest("POST", API_ROUTES.duplicateApprenticeship, {
    data: postData,
  }).then((e) => {
    console.log(e);
    callback(e);
  });
};
export {
  viewAllApprenticeships,
  deleteApprenticeship,
  updateApprenticeship,
  addValue,
  addApprenticeship,
  viewApprenticeship,
  duplicateApprenticeship,
};
