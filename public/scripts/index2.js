// index.js

var REST_DATA = 'api/cars';
var KEY_ENTER = 13;
var defaultItems = [

];

var item = 0;

function encodeUriAndQuotes(untrustedStr) {
    return encodeURI(String(untrustedStr)).replace(/'/g, '%27').replace(')', '%29');
}

function addanimal() {
    console.log("adding your animal");
    //var data = document.getElementById('newcar').value;
    var data = {
        name: "animal",
        valueAnimal: document.getElementById('animalname').value,
        valueLegs: document.getElementById('animallegs').value
    };
    item++;

    console.log("Added animal: " + document.getElementById('animalname').value);
    console.log("Number of Legs of added Animal: " + document.getElementById('animallegs').value);
    xhrPost(REST_DATA, data, function(item) {
        
    }, function(err) {
        console.error(err);
    });
}