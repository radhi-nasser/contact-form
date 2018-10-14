import axios from 'axios';

import * as vars from '../vars.json'; // global variables


// get messages function
export function getMessages() {

    return new Promise(function(resolve, reject) {

        axios.get(vars.API_URL)
            .then(result => {
                resolve(result.data);
            }, (error) => {
				reject(error);
            });
    });
}

// create a new message function
export function createMessage(data) {

    return new Promise(function (resolve, reject) {

        axios.post(vars.API_URL, data)
            .then(result => {
                resolve(result);
            }, (error) => {

				// if its' a validation error, handle it
                if (error.response.hasOwnProperty('data')) {

                    let finalError = error.response.data;

                    if (finalError.hasOwnProperty('errors')) {
                        // transform the errors array to an object
                        let errors = {};
                        for (let key in finalError.errors) {
                            let error = finalError.errors[key];
                            let errorKey = Object.keys(error)[0];
                            errors[errorKey] = error[errorKey];
                        }
                        finalError.errors = errors;
                    }

                    reject(finalError);
                }
                else {

                    reject(error);
                }
            });
    });
}
