
import {handleError} from './utils';

//external HTTP Request Variables
const defaultURL = 'http://localhost:8000';

//test function (delete if successful)
export async function testRequest() {
    const result = await getRequest('/test');
    return result? result.col1: 'connection failed';

}

//Base http request functions

export const getRequest = async (endpoint) => {
    try {
        const response = await fetch(defaultURL+endpoint);
        if(response.ok){
            //!switch 'text' to 'json' after initial testing
            return await response.json();
        }
        throw new Error('the get request failed');
    } catch(error) {
        handleError(error, 'getRequest in httpRequest.js');
    }
}