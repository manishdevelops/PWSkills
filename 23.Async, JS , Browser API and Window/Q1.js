// XMLHTTPRequest object is an API which is used for fetching data from the server. XMLHTTPRequest is basically used in Ajax programming. It retrieve any type of data such as json, xml, text etc. It request for data in background and update the page without reloading page on client side.20 Jan 2023

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.responseText);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

xhr.send();
