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
var currentList = ListsObject[Object.keys(ListsObject)[0]];  //This is what chooses what list is shown. It starts off as the first list, in this case the example list.

var ListObjectName = "a0";  //This is what initially sets up what the lists are called in the code


alert("About to render!")
render();   //It starts of by rendering the page

//------------------------------------------------------------------------

function render() {  //This function is what displays the lists and items on the page

  console.log(ListsObject);

    // this will hold the html that will be displayed in the sidebar
    let listsHtml = `<div id="notNav">`;

    // iterate through the lists to get their names
    sl = 0;
    Object.keys(ListsObject).forEach((list) => {
      sl += 1
      listsHtml += `<div class="list" data-whatlist="${sl}">${ListsObject[list].name}</div>`;
    });
   
    listsHtml += '</div>';
    // print out the lists
   
    document.getElementById('nav').innerHTML = listsHtml;

    // Adding an event listener to the notNav
    let Ear = document.getElementById("notNav")
    Ear.addEventListener('click', GrabValue)


    // print out the name of the current list
   
    document.getElementById('heading').innerText = currentList.name;
    // iterate over the todos in the current list
   
    let todosHtml = '<div class="notItems">';
    currentList.items.forEach((list) => {
      todosHtml += `<div class="item">${list.item}</div>`;
    });

    todosHtml += `</div>`
    // print out the todos
    document.getElementById('items').innerHTML = todosHtml;

    // save();
   }

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

   function GrabValue(evt){
      var WhichList = evt.target.getAttribute("data-whatlist")
      var WhichIndexList = WhichList - 1
      currentList = ListsObject[Object.keys(ListsObject)[WhichIndexList]]
      render();
   }

   function DeleteCurrentList(){
    
   }



   function save() {
    localStorage.setItem('currentList', JSON.stringify(currentList)); 
    localStorage.setItem('lists', JSON.stringify(ListsObject));
   }
    function dataDelete(){
      localStorage.removeItem('currentList')
      localStorage.removeItem('lists')
    }
    function dataRestore(){
      currentList = JSON.parse(localStorage.getItem('currentList'))
      ListsObject = JSON.parse(localStorage.getItem('lists'))
      render();
    }
//=========================================================================================


