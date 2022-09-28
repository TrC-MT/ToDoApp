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

var ListObjectKeyname = "a0";  //This is what initially sets up what the lists are called in the code

var error = False;

alert("About to render!")
render();   //It starts of by rendering the page

//------------------------------------------------------------------------

function render() {  //This function is what displays the lists and items on the page
  if (error == False){
    
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

    save();
  }
  else{ // if error == True;
    //render an error page
  }
}

   function AddList() { //This function is what allows the user to add a list to the object

    ListObjectKeyname += "1a" //This is what allows a new list to be formed in the code. It is not shown on the page

    // get the list text from the list input box
    const list = document.getElementById("inputAddLists").value;
    if(list) {
      ListsObject[ListObjectKeyname] = {
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

   // Warning! Global variable undefined here.
   var WhichIndexList;
    // Warning! Global variable undefined here.

   function GrabValue(evt){
      WhichList = evt.target.getAttribute("data-whatlist")
      WhichIndexList = WhichList - 1
      currentList = ListsObject[Object.keys(ListsObject)[WhichIndexList]]
      render();
   }

   function DeleteCurrentList(){ //The instructor (Scott) helped build this out for me.
/* It basically takes the ListsObject, converts it to an array with [[key], [value]].
Then it checks the values, and if they're not equal to the currentList that we're deleting,
it puts them into a new object, coverted back to the old object. */
    ListsObject = Object.entries(ListsObject).reduce((accum, [key, value]) => {
      const isKeep = value !== currentList;

      return isKeep ? { ...accum, [key]: value }: accum
    }, {})
    //end of instructors code

    if (WhichIndexList-1 == -1){
      WhichIndexList += 1
      if ((currentList = ListsObject[Object.keys(ListsObject)[WhichIndexList]]) == undefined){
        WhichIndexList = 0
        error = True;
      }
    }
    else{
      WhichIndexList -= 1
    }

    currentList = ListsObject[Object.keys(ListsObject)[WhichIndexList]]


    render();
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


