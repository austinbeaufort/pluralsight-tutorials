// JQUERY
// SINGLE FILE, CROSS-BROWSER, SELECTORS, EVENTS, AJAX, PLUGINS

window.onload = function() {
    console.log('window loaded');
}

$(document).ready(function() {
    console.log('DOM loaded');
});

$(document).ready(function() {
    $('#myContent').html('Hello World!');
});

// $(document).ready(function () {
//     $('div[title*="Title"]').html('Updated Div Value due to Title');
// });

$(document).ready(function() {

    var html = '';
    $('div.BlueDiv, div.RedDiv').each(function(index) {
        this.title = 'Some title';
        $(this).attr('title', 'Some title 2');
    });

    $('div.BlueDiv, div.RedDiv')
    .attr({title: 'Some title 3'})
    .css({
        'background-color':'purple',
        'color':'white',
        'font-size':'20px'
    })
    .text('Changed Color');

    // Modifying the DOM
    $('#TableContainerDiv').append('<span style="background-color:green"> Appended Child 1</span>');
    $('#TableContainerDiv').prepend('<span style="background-color:green"> Prepended Child 1</span>');
    
    // Wrap
    $('span.Foo').wrap('<div class="RedDiv ParentWrapper" />');
    $('div.ParentWrapper').each(function() {
        console.log($(this).html());
    });

    // Remove
    $('div.ParentWrapper').remove();

    // Class functions
    // $('input[type="text"]').addClass('Highlight');
    // $('#LastNameTextBox').removeClass('Highlight');
    
});

function FocusBlur(textBox) {
    $(textBox).toggleClass('Highlight');
}


// MULTIPLE CLASS NAME SEARCHES $('.BlueDiv, .RedDiv');
// $('a.myClass'); // finds all anchor tags that have class,
// of 'myClass'.

// USE BRACKETS [ATTRIBUTE] TO SELECT BASED ON ATTRIBUTE NAME OR VALUE.
// $('a[title]'); // selects all <a> elements with 'title' attribute

// $('a[title="ProgrammingInfo"]'); // selects all <a> elements that,
// have "ProgrammingInfo" title attribute value.


// SELECTING INPUT NODES

// $(':input') // selects all input elements including:
// input, select, textarea, button, image, radio, etc.

// $(':input[type="radio"]'); // targets all radio buttons on,
// the page.


// ADDITIONAL SELECTOR FEATURES:

// :contains() will select elements that match the contents,
// within the contains exception:

// $('div:contains("pluralsight")');

// selects div's that contain the text 'pluralsight' 
// the above match is case-sensitive


// SELECTING EVEN OR ODD ROWS IN A TABLE

// $('tr:odd') and $('tr:even') is the jQuery syntax for selecting,
// odd or even rows.

// index is 0 based.


// SELECTING FIRST CHILD
// $('element:first-child'); selects the first child of every,
// element group

// $('span:first-child');


// USING STARTS WITH IN SELECTORS

// [attribute^="value"] will select all elements with an,
// attribute that begins with stated value:

// $('input[value^="Events"]'); selects any input element whose value,
// attribute begins with "Events".

// [attribute$="value"]; will select all elements with an,
// attribute that ends with stated value:

// $('input[value$="Events"]'); selects any input element whose,
// value attribute ends with "Events".

// [attribute *="value"] will select all elements with an attribute,
// that contains the stated value:

// $('input[value*="Events"]'); selects any input element whose,
// value attribute contains "events".


// MODIFYING OBJECT PROPERTIES

// The this.propertyName statement can be used to modify an object's properties directly:

// $('div').each(function(i) {
//     this.title = "My Index=" + i;
// });

// ACCESSING ATTRIBUTES
// attr():

// let value = $('#customerDiv').attr('title'); Retrieves the value of the title attribute.

// attr(attributeName, value); used to access an object's attributes and modify the value.

// $('img').attr('title', 'My Image Title'); // changes the title attribute to a value,
// of 'My Image Title'. 

// To modify multiple attributes, pass a JSON object containing name/value pairs.

// $('img').attr({
//     title: 'My image title',
//     style: 'border: 2px solid black;'
// });
// ABOVE JSON OBJECT WAS USED TO CHANGE TITLE AND BORDER.



// ADDING AND REMOVING NODES

// .append()
// .appendTo()
// .prepend()
// .prependTo()
// .remove()


// APPENDING ADDS CHILDREN AT THE END OF THE MATCHING ELEMENT.
// $('<span>(office)</span>').appendTo('.officePhone');
// or
// $('.officePhone').append('<span>(office)</span>');


// PREPENDING ADDS CHILDREN AT THE BEGINNING OF THE MATCHING ELEMENT.

// $('<span>Phone:</span>').prependTo('.phone');
// or
// $('.phone').prepend('<span>Phone:</span>');


// WRAPPING ELEMENTS
// wraps a tag with a parent tag
// $('.state').wrap('<div class="US_State"/>');


// REMOVING NODES
// $('.phone, .location').remove();
// will result in objects with .phone or .location classes,
// being removed from the DOM.



// MODIFYING STYLES WITH THE .css() function.

// $('div').css('color', 'red');

// MODIFYING MULTIPLE STYLES

// $('div').css({
//     'color':'#ccc',
//     'font-weight':'bold'
// });



// MODIFYING CLASSES
// .addClass()
// .hasClass()
// .removeClass()
// .toggleClass()

// $('p').addClass('classOne');
// $('p').addClass('classOne classTwo');

// .hasClass returns true if has matching class

// if($('p').hasClass('styleSpecific')) {
//     // perform work.
// }

// .removeClass can remove one or more classes.

// if no argument given, .removeClass() removes all.

// $('p').removeClass();

// .toggleClass() alternates adding or removing a class,
// based on the current presence or absence of the class.

// $('#PhoneDetails').toggleClass('highlight');



// HANDLING EVENTS USING JAVASCRIPT

// .click(handler(event));

// $('#myId').click(function() {
//     console.log('the element was clicked');
// });

// $('otherId').click(function() {
//     $('myId').click();
// });

// above, when otherId is clicked, causes myId to be clicked also.

$(document).ready(function() {
    wireEvents();
});

function wireEvents() {
    $('#SubmitButton').click(function() {
        let firstNameVal = $('#FirstNameTextBox').val();
        console.log(firstNameVal);
        let lastNameVal = $('#LastNameTextBox').val();
        $('#divOutput').text(`${firstNameVal} ${lastNameVal}`);
    });

    // HANDLE SELECT
    $('.myInput').change(function() {
        console.log($(this).val());
        $(this).addClass('Highlight');
    });

    // $('#MyDiv')
    // .mouseenter(function() {
    //     toggle(this);
    // })
    // .mouseleave(function() {
    //     toggle(this);
    //     $(this).css('cursor', 'pointer');
    // })
    // .mouseup(function(event) {
    //     console.log($(event.target).attr('id'));
    //     $(this).text(`X: ${event.pageX} Y: ${event.pageY}`);
    // });

    // function toggle(div) {
    //     $(div).toggleClass('Highlight');
    // }

    

    // bind() and on()
    $('#MyDiv').on('mouseenter mouseleave mouseup', function(event) {
        $(this).toggleClass('Highlight');
        $(this).css('cursor', 'pointer');
        if(event.type == 'mouseup') {
            $(this).text(`X: ${event.pageX} Y: ${event.pageY}`);
        }
    });

    $('#MyTable tr').hover(function() {
        $(this).toggleClass('lightHighlight');
    });

    // $('#MyDiv').off();

}


// USING on()

// .on(eventType, handler(event)) attaches a handler to an event
// for the selected element(s)

// $('#MyDiv').on('click', function() {
//     // handle click event
// });


// USING off()

// .off(event) is used to remove a handler previously bound to an element.

// $('#test').click(handler); // can be unbound using..
// $('#test').off();

// specific events can also be targeted using off();
// $('#test').off('click');


// BINDING MULTIPLE EVENTS WITH on()

// on() allows multiple events to be bound to one or more elements.
// event names to bind are separated with a space:

// $('#myDiv').on('mouseenter mouseleave', function() {
//     $(this).toggleClass('entered');
// });



// live(), delegate(), and on() Functions

// allow new DOM elements to automatically be 'attached' to an event handler.

// allow children to be added to a container without explicitly,
// attaching an event handler to each child.


// USING live()

// Event handlers can be set using live()

// the document object handles events by default
// works even when new objects are added into the DOM

// $('.someClass').live('click', someFunction);

// Stop live event handling using die();

// $('.someClass').die('click', someFunction);


// delegate is the newer version of live()

// A context object handles events by default rather than the Document Object.
// Works even when new objects are added into the DOM

// $('#Divs').delegate('div', 'click', someFunction);

// Stop delegate event handling using undelegate();


// on() function is a new replacement for bind(), delegate(), and live()

// $('div').on('click', function() {
//     alert('clicked button!');
// });


// USING ON() WITH CHILD OBJECTS

// the on() function can be used in place of live() and delegate()

// works when new objects are added into the DOM:

// $('#MyTable tbody').on('click', 'tr', function(event) {
//     console.log('row was clicked and bubbled up!!');
// });

// USING on() WITH A MAP
// MULTIPLE EVENTS AND HANDLERS CAN BE DEFINED IN on() USING A 'MAP'.

// $('#myTable tr').on({
//     mouseenter: function() {
//         $(this).addClass('over');
//     },
//     mouseleave: function() {
//         $(this).removeClass('out');
//     }
// });


// WORKING WITH AJAX FEATURES

// allows parts of a page to be updated
// cross-browser support
// simple api
// 'GET' and 'POST' supported
// JSON, HTML, scripts

// jQuery Ajax Functions

// $(selector).load(); // loads HTML data from server
// $.get() and $.post() // Get raw data from the server
// $.getJSON(): // Get/Post and return JSON
// $.ajax(): // provides core functionality.

// jQuery Ajax functions work with REST API's.

// USING LOAD()

// $(selector).load(url, data, callback) // allows HTML content,
// // to be loaded from server and added into a DOM object:

// $(document).ready(function() {
//     $('#HelpButton').click(function() {
//         $('#myDiv').load('helpDetails.html');
//     });
// });

// Using load() With a Selector

// A selector can be added after the URL to filter the content,
// that is returned from calling load()

// $('#myDiv').load('helpDetails.html #MainTOC');


// Passing Data using load()
// Data can be passed to the server using load(url, data);

// $('#myDiv').load('GetCustomers.aspx', {PageSize:25});

// load() can be passed a callback function:

// $('#outputDiv').load('notFound.html',
//     function (response, status, xhr) {
//         if (status == 'error') {
//             alert(xhr.statusText);
//         }
//     });


// $(document).ready(function() {
//     console.log('hi');
// });

// $('p') // get all <p> elements

// $('a') // get all <a> elements

// TO REFERENCE MULTIPLE TAGS, USE THE , CHARACTER TO SEPARATE THE ELEMENTS:
// $('p, a, span') // selects all <p> <a> and <span> elements.

// THE ABOVE METHOD ALSO WORKS WITH querySelectorAll('p, a, span');

// ANCESTOR DESCENDANT SYNTAX

// $('table tr'); // selects all <tr> tags inside of <table>

// DESCENDANTS ARE CONSIDERED, CHILDREN, GRANDCHILDREN, ETC.


$(document).ready(function() {
    let tbody = $('#customers tbody');
    $('#addRow').on('click', function() {
        tbody.append('<tr><td> Jane </td><td> Doe </td></tr>');
    });

    tbody.on('click', 'td', function() {
        console.log($(this).text());
    })
});

// HANDLING HOVER EVENTS

// hover()

// $(selector).hover(handlerIn, handlerOut);

// handlerIn = mouseenter
// handlerOut = mouseleave

// $('#target').hover(
//     function() {
//         $(this).css('background-color', '#00FF99'); // mouseenter
//     },
//     function() {
//         $(this).css('background-color', '#FFFFFF'); // mouseleave
//     }
// );


// ANOTHER HOVER OPTION IS $(selector).hover(handlerInOut);

// Fires the same handler for mouseenter and mouseleave events

// Used with jQuery's toggle methods

// $('p').hover(function() {
//     $(this).toggleClass('over');
// });


// $(document).ready(function() {
    // $('.button').click(function() {
    //     // load HTML from helpDetails.html
    //     $('.outputDiv').load('../HelpDetails.html .subTOC');
    // });

    // $('.button').click(function() {
    //     $('.outputDiv').load('notFound.html', function(response, status, xhr) {
    //         if (status == 'error') {
    //             console.log(`Error: ${xhr.statusText}`);
    //         }
    //     });
    // });

    // $('.button').click(function() {
    //     $('.outputDiv').load('../GetCustomers.aspx', {PageSize:10});
    // });
// });



// USING get()
// $.get(url, data, callback, datatype) // can retrieve data from a server:

// $.get('HelpDetails.html', function(data) {
//     $('.outputDiv').html(data);
// });


// USING getJSON()
// $.getJSON(url, data, callback) can retrieve data from a server:

// $.getJSON('CustomerJson.aspx', {id:1},
//     function (data) {
//         console.log(`${data.FirstName} ${data.LastName}`);
// });

// $(document).ready(function() {
//     $('.button').click(function() {
        // $.get('../HelpDetails.html', function(data) {
        //     $('.outputDiv').html(data);
        // });

        // $.get('../CustomerJson.aspx', {id:5}, function(data) {
        //     console.log(`${data.firstName}`);
        // }, 'json');
        // $.getJSON('../Customer.Json.aspx', {id:5}, function(data) {
        //     console.log(data.firstName);
        // });

//     });
// });



// POST REQUESTS
// post requests are not cached in the browswer

// $.post('GetCustomers.aspx', {PageSize:15}, function(data) {
//     $('.outputDiv').html(data);
// });

// $(document).ready(function() {
//     $('.button').click(function() {
//         $.post('../GetCustomers.aspx', {PageSize:15}, function(data) {
//             $('.outputDiv').html(data);
//         });
//     });
// });

// $(document).ready(function() {
//     $('.button').click(function() {
//         $.post('../CustomerService.svc/GetCustomers', null, function(data) {
//             let cust = data.d[0];
//             $('outputDiv').html(cust.FirstName + ' ' + cust.LastName);
//         }, 'json')
//     });
// });


// INTRODUCTION TO ajax() FUNCTION

// ajax() provides extra control over making Ajax calls to a server

// Configure using JSON properties:
// contentType, data, dataType
// error, success, type (GET or POST)

// $.ajax({
//     url: '../CustomerService.svc/InserCustomer',
//     data: customer,
//     dataType: 'json',
//     success: function(data, status, xhr) {
//         console.log(`yay we did it!`);
//     },
//     error: function(xhr, status, error) {
//         console.log('oopsies an error has occured');
//     }
// });

$(document).ready(function() {
    $('.button').click(function() {
        let customer = 'cust=' + 
            JSON.stringify({
                firstName: $('.firstName').val(),
                lastName: $('.lastName').val()
            });
        $.ajax({
            url: '../CustomerService.svc/InsertCustomer',
            data: customer,
            dataType: 'json',
            success: function(data, status, xhr) {
                $('.outputDiv').html('Insert status: ' +
                data.d.Status + '<br/>' + data.d.message);
            },
            error: function(xhr, status, error) {
                console.log('oopsies we got an error: ' + status);
            }
        });
    });
});