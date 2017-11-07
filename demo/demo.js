

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', './dump.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }

function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
     console.log(actual_JSON);
        var template = Handlebars.compile(document.querySelector('#template').innerHTML);
     document.querySelector("#display").innerHTML = template(actual_JSON);
//        $( ".accordion6" ).accordion();
//     $( ".accordion5" ).accordion();
     $( ".accordion4" ).accordion();
     $( ".accordion3" ).accordion();
     $( ".accordion2" ).accordion();
     $( ".accordion1" ).accordion();


 });
}
init();
