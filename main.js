// Listed Items Container
let listContainer = document.getElementById("listContainer");


// Input Box
let inputBox = document.querySelector('#itemBox');



// Buttons


// Add
let add = document.querySelector('.add');
add.getElementsByClassName.backgroundColor = "#9ef416";
add.addEventListener('click', function(){
    //creates new list item
    let newItem = document. createElement("p");
    newItem.innerHTML = inputBox.value;
    newItem.className = 'listItem'
    newItem.addEventListener('click', function(){
        if(newItem.style.textDecoration !== "line-through"){
            newItem.style.textDecoration = 'line-threw'

        }else {
            newItem.style.textDecoration = '';
        }
    })
    //appends item to parent
    listContainer.appendChild(newItem);
    inputBox.value = '';
    console.log(`Added Item: ${newItem.innerHTML}`)
})

//Remove Completed Tasks
let removeCompleted = document.querySelector('.removeCompleted');
removeCompleted.style.backgroundColor = 'yellow'
removeCompleted.addEventListener('click', function(){
    let completedItems = document.querySelectorAll('#listContainer .listItem')
    for(let i = 0; i < completedItems.length; i++){
        if(completedItems[i].style.textDecoration === 'line-through'){
            console.log(`Completed Item: ${completedItems[i].innerHTML}`);
            completedItems[i].remove();
        }
    }
})

//remove All
let removeAll = document.querySelector('.removeAll');
removeAll.style.backgroundColor = "#f74a5f";
removeAll.addEventListener('click', function(){
    let listItems = document.querySelectorAll('#listContainer .listItem')
    for(let i = 0; i < listItems.length; i++){
        console.log(`Removed Items: ${listItems[i].innerHTML}`);
        listItems[i].remove();
    }
})





/*   crud application, create, update and delete
To-Do list Dome notes
 * Users have the ability to add new to-do items
 -form
 -text input box and submit (get input from the user and add it to the list when they click submit)
 -document.createElement to create the list items
 -appendChild to add to our list

* Users have the ability to view to-do items
-list to keep track of our to-do items
-querySelectorAll (or bubbling) can be utilized to access the array of the individual list items

HTML
-empty list
-form
-buttons
-text input

JS
-list items
*/

/*toDoForm.addEventListener('submit', function(event){
    event.preventDefault();

    //create new list item
    let newItem = document.createElement('li');

    //give list item text from textInput box
    newItem.innerText = textInput.value;

    // console.log(newItem);

    toDoList.appendChild(newItem);
    textInput.value = "";

})
*/
/*

toDoForm.addEventListener('submit', function(event){
    event.preventDefault();

    //create new list item
    let newItem = document.createElement('li');

    //give list item text from textInput box
    newItem.innerText = textInput.value;

    // console.log(newItem);

    toDoList.appendChild(newItem);
    textInput.value = "";




let toDoForm = document.querySelector('#toDoForm');
let textInput = document.querySelector('#textInput');
let toDoList = document.querySelector('#toDoList')

toDoForm.addEventListener('submit', function(event){
    event.preventDefault();

    //create new list item
    let newItem = document. createElement('li');

    //give list item tet from textInput box
    newItem.innerText = textInput.value;

    //console.log(newItem);

    toDoList.appendChild(newItem);
    textInput.value = "";

})



//
// Allow users to clear all to-do items
*/