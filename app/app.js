/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/

//localStorage interaction function
//get item
var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  return window.localStorage.clear();
}

// find key
var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}


///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks


// user enters in item quantity and name, then chooses department
// print information in list form below input space
// store item name and department as key:value in local storage
// if user hits clear list -> clear local storage data
// create checkbox in front of item so user can check off when it's been 'handled' at the store
// this is all AFTER cutting scope in half x 2
// won't include the following unless time allows
// print grid to screen and sort by department (and alphabetically)
// show purchased items with strike-through
// be able to put in recurring items and quantities
// share list with someone else (live)
// ...


$(document).ready(function() {
  $('#createButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      //current key exists, do something error-handle-y
    } else {
      createItem(currentKey, currentValue);
    }
  });

  $('#updateButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      updateItem(currentKey, currentValue);
    } else {
      //current key doesnt exist, do stuff
    }
  });

  $('#addItemButton').click(function(event) {
  var printItem = $('<div class="item"</div>');
  printItem.appendTo("#item-container");
  createItem(currentKey, currentValue);
  });

  $('#clearListButton').click(function(event) {
    return window.localStorage.clear();
  });

  $('#checkbox').click(function(event) {
    return window.localStorage.removeItem();
  });

});



// FROM DAVE'S ORIGINAL APP.JS
// $(document).ready(function() {
//   $('#createButton').click(function(event) {
//     event.preventDefault();

//     var currentKey = $("#keyInput").val();
//     var currentValue = $("#valueInput").val();
//     if (keyExists(currentKey)) {
//       //current key exists, do something error-handle-y
//     } else {
//       createItem(currentKey, currentValue);
//     }
//   });

//   $('#updateButton').click(function(event) {
//     event.preventDefault();

//     var currentKey = $("#keyInput").val();
//     var currentValue = $("#valueInput").val();
//     if (keyExists(currentKey)) {
//       updateItem(currentKey, currentValue);
//     } else {
//       //current key doesnt exist, do stuff
//     }
//   });
// });


