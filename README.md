# hrext09-my-cruddy-app
Create Read Update and Delete framework using JS

 ## Tasks

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

 ### Advanced Reqs
- [ ] Item that I added goes here...

-------------------------- IDEA --------------------------
****Practical grocery list:
players --> buyer, grocer? (not really), groceries

buyer --> not absolutely necessary
- trip date
- location

grocer --> not absolutely necessary
- location
- flyer
- contact info

groceries --> necessary*
- product*
- quantity (optional)
- price (might not be known)
- on sale?
- used in recipe?
- brand
- nutritional facts

list:
- checkboxes
- recurring groceries
- ability to share via email
- ability to categorize each grocery item ex: "dairy," "frozen," "meat," "produce," "bakery," "other"

important things:
- product*
- quantity

allow user to 'tag' each product under a certain department like "dairy" and arrange list alphabetically by tags
allow sort function
allow search function

BASICS:
C - create a checklist of groceries that need to be purchased next trip at the grocery store, store in localStorage
R - read the list from localStorage to make modifications
U - update the list to relect additions, modifications
D - delete the entire list or indidivial list items per user input

[√] <grocery item> 'quantity...' 'department...'
[√]...
[ ]...
[ ]...
[ ]...


-------------------------- CODING IDEAS --------------------------
each product is an object and its key:value pairs would be something like quantity: 2 cups, department: 'dairy'

Ex: var eggs = {quantity: '1 dozen', department: 'dairy'};


