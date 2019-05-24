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

  // ADD ITEM BUTTON
  $('#addItemButton').click(function(event) {
  event.preventDefault();
  var currentKey = $("#itemInput").val();     // key is the item
  var currentValue = $("#departmentInput").val(); // value is the department
    if (keyExists(currentKey)) {
        alert("That item has already been added");
      }
      else {
        createItem(currentKey, currentValue);
        var printItem = $(`<li><input type="checkbox" class="box"><label for="box"</label></input>${currentKey}</li>`);
        printItem.appendTo("#item-container");
      }
     $('#itemInput').val('');
  });

// CLEAR local storage
  $('#clearListButton').click(function() {
    return window.localStorage.clear();
  });

});


