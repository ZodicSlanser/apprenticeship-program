 import axios from "axios";
 const clientHost = "localhost:9000";
//
// //adds the apprenticeship object to the Database and assigns an ID to it
// function addApprenticeship(postData, endpoint = '/add') {
//     const clientServerOptions = {
//         uri: "http://" + clientHost + endpoint,
//         body: JSON.stringify(postData),
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };
//     request(clientServerOptions, function (error, response) {
//         console.log(response.body);
//     });
// }
//
// //adds the
// function viewApprenticeship(ID, endpoint = '/view') {
//     const clientServerOptions = {
//         uri: "http://" + clientHost + endpoint,
//         body: JSON.stringify(ID),
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };
//
//     request(clientServerOptions, function (error, response) {
//         console.log(response.body);
//     });
// }
function viewAllApprenticeships(endpoint = '/view-all') {
    const clientServerOptions = {
        uri: "http://" + clientHost + endpoint,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    axios.get(clientServerOptions.uri).then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("Finished executing"))
}
function deleteApprenticeship(id, endpoint = '/delete') {
    const clientServerOptions = {
        uri: "http://" + clientHost + endpoint,
        body: JSON.stringify(id),
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };
    axios.post(clientServerOptions.uri, {ID : clientServerOptions.body}
    ).then(function (response){
        console.log(response)
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("Finished executing"))

}
// function updateApprenticeship(apprenticeship, endpoint = '/update') {
//     const clientServerOptions = {
//         uri: "http://" + clientHost + endpoint,
//         body: JSON.stringify({ apprenticeship }),
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };
//     request(clientServerOptions, function (error, response) {
//         console.log(response.body);
//     });
// }
// function addValue(field, value, apprenticeship, endpoint = '/add-value') {
//     const clientServerOptions = {
//         uri: "http://" + clientHost + endpoint,
//         body: JSON.stringify({ field, value, apprenticeship }),
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };
//     request(clientServerOptions, function (error, response) {
//         console.log(response.body);
//     });
// }
//
 export {viewAllApprenticeships,deleteApprenticeship};
//
// //console.log(JSON.parse(JSON.stringify({ apprenticeship })))
