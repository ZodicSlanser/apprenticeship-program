import axios from "axios";
import {API_ROUTES} from "./Config";

//adds the apprenticeship object to the Database and assigns an ID to it

function addApprenticeship(postData,callback) {
    sendRequest("POST",API_ROUTES.addApprenticeship,{data : postData}).then(callback);}

//returns a specific apprenticeship ID in an object
function viewApprenticeship(id,callback) {
  sendRequest("GET",API_ROUTES.viewApprenticeship,{params : {id : id}}).then(callback);
}
//returns all apprenticeship objects in DB in Array of JSONs
const viewAllApprenticeships= (callback) => sendRequest("GET",API_ROUTES.viewAllApprenticeships).then(callback);

//fetches data from the API
const sendRequest = async(method,uri,axiosOptions) => {
  try {
      const response = await axios[method.toLowerCase()](uri,axiosOptions);
     debugger; return response.data;
  }
  catch (error){
   return error;
  }
}

//deletes apprenticeship from DB (that doesn't remove the roles or the team members)
//TODO : remove sub collections after apprenticeship is deleted

// function deleteApprenticeship(ID, endpoint = "/delete") {
//   const clientServerOptions = {
//     uri: "http://" + clientHost + endpoint + `?id=${ID}`,
//     body: ID,
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   console.log(ID + "\n" + clientServerOptions.uri);
//
//   axios
//     .delete(clientServerOptions.uri, { data: { id: ID } })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(() => console.log("Finished executing"));
// }

//changes the whole apprenticeship object with another
// function updateApprenticeship(apprenticeship, endpoint = "/update") {
//   const clientServerOptions = {
//     uri: "http://" + clientHost + endpoint,
//     body: JSON.stringify({ apprenticeship }),
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   axios
//     .post(clientServerOptions.uri, { body: clientServerOptions.body })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(() => console.log("Finished executing"));
// }

//adds a new value to a field in the apprenticeship
// function addValue(field, value, apprenticeship, endpoint = "/add-value") {
//   const clientServerOptions = {
//     uri: "http://" + clientHost + endpoint,
//     body: JSON.stringify({ field, value, apprenticeship }),
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   axios
//     .post(clientServerOptions.uri, { body: clientServerOptions.body })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(() => console.log("Finished executing"));
// }

export {
  // viewAllApprenticeships,
  // deleteApprenticeship,
  // updateApprenticeship,
  // addValue,
  // addApprenticeship,
  viewApprenticeship,
};
