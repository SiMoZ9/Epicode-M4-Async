//TIMEOUT

console.log("Start")

setTimeout(function () {
    console.log("ciao");
}, 2000)

console.log("Exec")

console.log("End")

//AJAX

//Creo un oggetto XMLHttpRequest
//onload quando la risposta è pronta

//invio richiesta

/*const xhr = new XMLHttpRequest;
const url = "https://jsonplaceholder.typicode.com/"

//Funzione di callback quando ricevo la risposta

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(xhr.responseText)
    } else {
        console.log("no");
    }
}

xhr.onerror = function () {
    console.log("errore");
}

xhr.open("GET", url);
xhr.send();
*/

/*function makeGetRequest(url, callback) {
    const xhr = new XMLHttpRequest;

    xhr.onload = callback;

    xhr.onerror = function () {
        throw new Error("Network Error");
    }

    xhr.open("GET", url);
    xhr.send();
}
*/

function AjaxRequest(url) {
    return new Promise(function (resolve, reject) {

        const xhr = new XMLHttpRequest;

        xhr.open("GET", url);
        xhr.onload = function () {
            if(xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(new Error("Request Failed"));
            }
        }
        xhr.onerror = function () {
            reject(new Error("Network Error"));
        }

        xhr.send();
    })
}
//multiple promises

AjaxRequest("https://jsonplaceholder.typicode.com/users/1")
   .then( function (response) {
        const res1 = JSON.parse(response);
        const url2 = `https://jsonplaceholder.typicode.com/users/${res1.id}/comments`
        
        return AjaxRequest(url2);
    })

    .then( function (response2) {
        const res2 = JSON.parse(response2);
        console.log('res2: ', res2)
    } )
  .catch( function (error) {
    throw new Error(error);
  })