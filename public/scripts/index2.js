// index.js

var REST_DATA = 'api/cars';
var KEY_ENTER = 13;
var defaultItems = [

];

var item = 0;

function encodeUriAndQuotes(untrustedStr) {
    return encodeURI(String(untrustedStr)).replace(/'/g, '%27').replace(')', '%29');
}

function addcar() {
    console.log("adding car");
    //var data = document.getElementById('newcar').value;
    var data = {
        name: "car",
        value: document.getElementById('newcar').value
    };
    item++;
    xhrPost(REST_DATA, data, function(item) {
        
    }, function(err) {
        console.error(err);
    });
}