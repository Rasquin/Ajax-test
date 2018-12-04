/*form of buttons
const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";// Here we get the title of the column of data, and that is clean every time you click a new gruop (ex:planets)

    getData(type, function(data) {
        data = data.results;

        data.forEach(function(item) {
            el.innerHTML += "<p>" + item.name + "</p>";// the += is for not overwriting, but that everything appear
        });
    });
}*/

/*form of table*/


const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`); //here we designate what goes in each table cell
    })
    return `<tr>${tableHeaders}</tr>`
}

function writeToDocument(type) {
   
    var el = document.getElementById("data");
    el.innerHTML = ""; // Here we get the title of the column of data, and that is clean every time you click a new gruop (ex:planets)

    getData(type, function(data) {
        var tableRows = []; //now we want to add rows
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]); //thus we get each data and doesn matter the name of the column

        data.forEach(function(item) { //here we write the content of each row
            var dataRow = [];

            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15) //Here we truncate the data because it's too long, we take the 1st 15 characters
                //dataRow.push(`<td>${item[key]}</td>`); //individual row
            dataRow.push(`<td>${truncatedData}</td>`)//now we show is the truncated data
                
            });
            tableRows.push(`<tr>${dataRow}</tr>`);

            // el.innerHTML += "<p>" + item.name + "</p>"; // the += is for not overwriting, but that everything appear
        });
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}
