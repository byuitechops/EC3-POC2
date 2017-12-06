

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


     // Accordion - Expand All #01
$(function () {
    $(".accordion").accordion({
        collapsible: true,
        active: false,
        autoHeight:false
    });
    var icons = $(".accordion").accordion("option", "icons");
    $('.open').click(function () {
        $('.ui-accordion-header').removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top').attr({
            'aria-selected': 'true',
                'tabindex': '0'
        });
        $('.ui-accordion-header-icon').removeClass(icons.header).addClass(icons.headerSelected);
        $('.ui-accordion-content').addClass('ui-accordion-content-active').attr({
            'aria-expanded': 'true',
                'aria-hidden': 'false'
        }).show();
        $(this).attr("disabled", "disabled");
        $('.close').removeAttr("disabled");
    });
    $('.close').click(function () {
        $('.ui-accordion-header').removeClass('ui-accordion-header-active ui-state-active ui-corner-top').addClass('ui-corner-all').attr({
            'aria-selected': 'false',
                'tabindex': '-1'
        });
        $('.ui-accordion-header-icon').removeClass(icons.headerSelected).addClass(icons.header);
        $('.ui-accordion-content').removeClass('ui-accordion-content-active').attr({
            'aria-expanded': 'false',
                'aria-hidden': 'true'
        }).hide();
        $(this).attr("disabled", "disabled");
        $('.open').removeAttr("disabled");
    });
    $('.ui-accordion-header').click(function () {
        $('.open').removeAttr("disabled");
        $('.close').removeAttr("disabled");

    });
});

//     $( ".accordion1" ).accordion({collapsible: true});
//     $( ".accordion2" ).accordion({collapsible: true});
//     $( ".accordion3" ).accordion({collapsible: true});
//     $( ".accordion4" ).accordion({collapsible: true});
//     $( ".accordion5" ).accordion({collapsible: true});
//     $( ".accordion6" ).accordion({collapsible: true});
 });
}
init();


