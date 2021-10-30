import {HOST} from '../../commons/hosts';
import RestApiClient from "../../commons/api/rest-client";


const endpoint = {
    person: '/user'
};

function getUser(params, callback){
    let request = new Request(HOST.backend_api + endpoint.person + "/login", {
        method: 'POST'
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

export {
  getUser
};