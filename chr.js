//chrome://extensions/
// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

//function saveLead() {
//    console.log("Button clicked!")
//}


//let myLeads = ["www.awesomelead.com","www.epiclead.com","www.greatlead.com"]
let myLeads = []
//for turning from string into array
//myLeads = JSON.parse(myLeads)
//for turning array into string
//myLeads = JSON.stringify(myLeads)
//console.log(typeof myLeads)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//localStorage.setItem("myLeads","www.example.com")
//console.log(localStorage.getItem("myLeads"))


//to get the leads back from local storage
//store it in a variable, leadsFromLocalStorage
//log out the varaiable
//store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//we have used tab btn to store the link of the current tab automativcally on clicking the button
const tabBtn=document.getElementById("tab-btn")
//check if leadsFromLocalStorage is  truthy means it has some leads
//if so , set myLeads to its values and call renderLeads() 
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click",function(){
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //console.log(tabs)
        // since only one tab should be active and in the current window at once
    // console.log(tabs[0])
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
 render(myLeads)
})
    
    })
   
//listen for double click on delete button when clicked clear the local storage
deleteBtn.addEventListener("dblclick",function(){
    
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
   // console.log(myLeads)
   //calling renderLeads function
   //clear out the input field after each input
   inputEl.value=""
   //save the myLeads array to local storage we need to use JSON.stringify as local storage only saves strings  
   localStorage.setItem("myLeads",JSON.stringify(myLeads))
   render(myLeads)
   //to verfy that it works
   console.log(localStorage.getItem("myLeads"))

    
})

//for(let i = 0;i < myLeads.length; i++) {
    //first way
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    //second way
  //  const li = document.createElement("li")
 //   li.textContent = myLeads[i]
    //ulEl.append(li)
//}


//in this way we use less DOM manipulation which is better for performance as inner html is running on time instead of looping again and again      
//create a variable listitem that holds all the html for the list items assign it to an empty string to begin with 
//add the item to the list Items variable instead of the ulEl.innerHTML
//render the listItems inside the unordered list using ulEl.innerHTML 

// secondly after this we have to render the leads inside the click function so that whenever we click the button the leads are rendered   
function render(leads){
    let listItems = ""
    for(let i = 0;i < leads.length; i++){
        //now we have to wrap in an anchor tag inside li so that we can make the link open in tab that is clickable
        //listItems += "<li>" + myLeads[i] + "</li>"
      //  listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `<li>
                         <a target='_blank' href ='${leads[i]}'>
                      ${leads[i]}</a>
                      <button class="delete-each-btn" data-index="${i}">
                    ❌
                </button>
        </li>`

        console.log(listItems)
    }
    ulEl.innerHTML = listItems
}

ulEl.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-each-btn")) {
        const index = e.target.dataset.index

        myLeads.splice(index, 1)   // delete lead by index
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }
})


//RECAPE
//falsy value in javascipt are false,0,"",null,undefined,NaN 
//PARAMETER VS ARGUMENT  .. arguments are defined outside the function while calling but oarameters are defined inside the function while defining the function 

//const – Declares a variable that cannot be reassigned.

//addEventListener() Runs code when an event (click, input, etc.) happens.

//innerHTML – Gets or sets HTML content inside an element.

//input.value – Reads or updates the value typed in an input field.

//function parameters – Values passed into a function to use inside it.

//template strings – Strings using backticks `, allow ${} for variables.

//localStorage – Stores data in the browser permanently.

//JSON object – Format to store and exchange data.

//Objects in arrays – Arrays that contain objects as elements.