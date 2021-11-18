import {HOST} from '../../commons/hosts';
import RestApiClient from "../../commons/api/rest-client";


const endpoint = {
    person: '/monitored/'
};

function getMonitoredValuesBySensor(params, callback){
    let request = new Request(HOST.backend_api + endpoint.person + params.sensor_id, {
       method: 'GET'
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

export{
    getMonitoredValuesBySensor
}