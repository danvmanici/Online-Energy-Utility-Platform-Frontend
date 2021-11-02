import {HOST} from '../../commons/hosts';
import RestApiClient from "../../commons/api/rest-client";


const endpoint = {
    person: '/user'
};

function loginUser(params, callback){
    let request = new Request(HOST.backend_api + endpoint.person + "/login" , {
        method: 'POST',
        headers : {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
}

function singUpUser(user, callback){
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

export {
    loginUser,
    singUpUser
};