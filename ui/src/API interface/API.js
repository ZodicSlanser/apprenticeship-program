import axios from "axios";
const clientHost = "localhost:9000";

//adds the apprenticeship object to the Database and assigns an ID to it
function addApprenticeship(postData, endpoint = "/add") {
  const clientServerOptions = {
    uri: "http://" + clientHost + endpoint,
    body: JSON.stringify(postData),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(clientServerOptions.uri, { body: clientServerOptions.body })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => console.log("Finished executing"));
}
//returns a specific apprenticeship ID in an object
function viewApprenticeship(ID, endpoint = "/view") {
  const clientServerOptions = {
    uri: "http://" + clientHost + endpoint,
    body: ID,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get(clientServerOptions.uri)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => console.log("Finished executing"));
}
//returns all apprenticeship objects in DB in JSON
function viewAllApprenticeships(endpoint = "/view-all") {
  const clientServerOptions = {
    uri: "http://" + clientHost + endpoint,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get(clientServerOptions.uri)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => console.log("Finished executing"));
}
//deletes apprenticeship from DB (that doesn't remove the roles or the team members)
//TODO : remove sub collections after apprenticeship is deleted
function deleteApprenticeship(ID, endpoint = "/delete") {
  const clientServerOptions = {
    uri: "http://" + clientHost + endpoint + `?id=${ID}`,
    body: ID,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(ID + "\n" + clientServerOptions.uri);

  axios
    .delete(clientServerOptions.uri, { data: { id: ID } })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => console.log("Finished executing"));
}
//changes the whole apprenticeship object with another
function updateApprenticeship(apprenticeship, endpoint = "/update") {
  const clientServerOptions = {
    uri: "http://" + clientHost + endpoint,
    body: JSON.stringify({ apprenticeship }),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(clientServerOptions.uri, { body: clientServerOptions.body })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => console.log("Finished executing"));
}
//adds a new value to a field in the apprenticeship
function addValue(field, value, apprenticeship, endpoint = "/add-value") {
  const clientServerOptions = {
    uri: "http://" + clientHost + endpoint,
    body: JSON.stringify({ field, value, apprenticeship }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(clientServerOptions.uri, { body: clientServerOptions.body })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => console.log("Finished executing"));
}

export {
  viewAllApprenticeships,
  deleteApprenticeship,
  updateApprenticeship,
  addValue,
  addApprenticeship,
  viewApprenticeship,
};
