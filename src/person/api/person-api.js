import {HOST} from '../../commons/hosts';
import RestApiClient from "../../commons/api/rest-client";


const endpoint = {
    person: '/client'
};

function getPersons(callback) {
    let request = new Request(HOST.backend_api + endpoint.person, {
        method: 'GET',
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function getPersonById(params, callback){
    let request = new Request(HOST.backend_api + endpoint.person + params.id, {
       method: 'GET'
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function getPersonByName(user, callback){
    let request = new Request(HOST.backend_api + endpoint.person + user.name, {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function postPerson(user, callback){
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

function putPerson(user, callback){
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

function deletePerson(user, callback){
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
    getPersons,
    getPersonById,
    getPersonByName,
    postPerson,
    putPerson,
    deletePerson
};
