var xhr = new XMLHttpRequest(); // an inbuilt object that JavaScript provides to allow us to consume APIs
/*xhr Allows us to call external APIs from our JavaScript application
By instantiating the XMLHttpRequest object*/

var data; // here we will save what we get from the json

xhr.open("GET", "https://swapi.co/api/"); /*GET to retrieve, POST to upload*/

xhr.send();
/* when we add the set time function, we don't need this anymore, becasue we get the data directly from the xhr function
function setData(jsonData) {//we need to take out the data form the xhr funtion
    data = jsonData;
    console.log(data)
}
/* the parse method to get an object, but now it appears as undefined
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        setData(JSON.parse(this.responseText));
    }
};*/


/* This code give us a string, and we want is an object
xhr.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};*/



/*console.log(data); the console.log has nothing to show beacause it is outside the function*/
/*
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = this.responseText;
    };
}*/
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
    };
}

setTimeout(function() { //1st parameter is the function, 2nd parameter is the time in milisec
    console.log(data);
}, 500);

/*--------------------------CALL BACK METHOD--------------------------------*/
/*
//dont need time outs, it is faster and more eficient that all that is up in this code

function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://swapi.co/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);
*/