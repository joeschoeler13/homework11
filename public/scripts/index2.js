// index.js

var REST_DATA = 'api/cars';
var KEY_ENTER = 13;
var defaultItems = [

];

function encodeUriAndQuotes(untrustedStr) {
    return encodeURI(String(untrustedStr)).replace(/'/g, '%27').replace(')', '%29');
}

function addcar() {
    console.log("adding car");
}