const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer = Math.round(Math.random());
    console.log({responseFromServer: responseFromServer});

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

console.log(makeServerRequest);
makeServerRequest.then(result => console.log({result: result}))
    .catch(error => console.log({error: error}));
