import {HOST} from '../../commons/hosts';
import RestApiClient from "../../commons/api/rest-client";


const endpoint = {
    person: '/sensor'
};

function getSensors(callback) {
    let request = new Request(HOST.backend_api + endpoint.person, {
        method: 'GET',
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function getSensorById(params, callback){
    let request = new Request(HOST.backend_api + endpoint.person + params.id, {
        method: 'GET'
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function postSensor(user, callback){
    let request = new Request(HOST.backend_api + endpoint.person + "/insert" , {
        method: 'POST',
        headers : {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
}

function putSensor(user, callback){
    let request = new Request(HOST.backend_api + endpoint.person + "/update", {
        method: 'PUT',
        headers : {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
}

function deleteSensor(user, callback){
    let request = new Request(HOST.backend_api + endpoint.person + "/delete/" + user.id, {
        method: 'DELETE',
        headers : {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
}

export {
    getSensors,
    getSensorById,
    postSensor,
    putSensor,
    deleteSensor
};
