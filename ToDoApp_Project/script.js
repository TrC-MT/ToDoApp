/*

listObject1:{
            name: "List one",
            items: [
                {
                    item: "Item one",
                    completed: false,
                },
                {
                    item: "Item two",
                    completed: false,
                },
            ]
        },

*/

//====================================================================================

let ListsObject = {  //This is where the lists are stored
  listObject1:{     //This is an example list
    name: "Example List",  //This is what the list is called on the page
    items: [  //This is where the items in the list are stored
        {
            item: "Example item one",  //This is an example item
            completed: false,  
        },
    ]
},
}

//----------------------------------------------------------------
var sl = 0;
var currentList = ListsObject[Object.keys(ListsObject)[sl]];  //This is what chooses what list is shown. It starts off as the first list, in this case the example list.

var ListObjectName = "a0";  //This is what initially sets up what the lists are called in the code





alert("About to render!")
render();   //It starts of by rendering the page

//------------------------------------------------------------------------

function render() {  //This function is what displays the lists and items on the page

    // this will hold the html that will be displayed in the sidebar
    let listsHtml = `<nav id="nav">`;

    // iterate through the lists to get their names
    Object.keys(ListsObject).forEach((list) => {
      listsHtml += `<div class="list">${ListsObject[list].name}</div>`;
    });
   
    listsHtml += '</nav>';
    // print out the lists
   
    document.getElementById('nav').innerHTML = listsHtml;
    // print out the name of the current list
   
    document.getElementById('heading').innerText = currentList.name;
    // iterate over the todos in the current list
   
    let todosHtml = '<div id="items">';
    currentList.items.forEach((list) => {
      todosHtml += `<div class="item">${list.item}</div>`;
    });
    // print out the todos
    document.getElementById('items').innerHTML = todosHtml;

    console.log(ListsObject);
    // save();
   }

  //  function save() {
  //   localStorage.setItem('currentList', JSON.stringify(currentList)); 
  //   localStorage.setItem('lists', JSON.stringify(lists));
  //  }

   function AddList() { //This function is what allows the user to add a list to the object

    ListObjectName += "1a" //This is what allows a new list to be formed in the code. It is not shown on the page

    // get the list text from the list input box
    const list = document.getElementById("inputAddLists").value;
    if(list) {
      ListsObject[ListObjectName] = {
        name: list,
        items: []
      },
      render();
    }
   }


   function AddItem() {
    // get the todo text from the todo input box
    const item = document.getElementById("inputAddItems").value;

    if(item) {
      currentList.items.push({
        item: item,
        completed: false
      },)
      render();
    }
   }


//=========================================================================================

// function AddList(){
//     let ListName = document.getElementById("inputAddLists").value;
    
//     var newList = getListAsHTML(ListName)
    
//     function getListAsHTML(ListName){
//         return `
//             <div class="list">${ListName}</div>
//         `
//     }

//     let Nav = document.getElementById("nav")

//     Nav.innerHTML = Nav.innerHTML + newList
// }

// function AddItem(){
//     let ItemName = document.getElementById("inputAddItems").value;
//     console.log("ItemName:")
//     console.log(ItemName)

//     var newItem = getItemAsHTML(ItemName)
//     console.log("newItem:")
//     console.log(newItem)

//     function getItemAsHTML(ItemName){
//         return `<div class="item">${ItemName}</div>`
//     }

//     let Items = document.getElementById("items")
//     console.log("Items:")
//     console.log(Items)

//     Items.innerHTML = Items.innerHTML + newItem
// }