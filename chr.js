// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

//function saveLead() {
//    console.log("Button clicked!")
//}


//let myLeads = ["www.awesomelead.com","www.epiclead.com","www.greatlead.com"]
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
   // console.log(myLeads)
   //calling renderLeads function
   //clear out the input field after each input
   inputEl.value=""
   renderLeads()

    
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
function renderLeads(){
    let listItems = ""
    for(let i = 0;i < myLeads.length; i++){
        //now we have to wrap in an anchor tag inside li so that we can make the link open in tab that is clickable
        //listItems += "<li>" + myLeads[i] + "</li>"
      //  listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `<li>
                         <a target='_blank' href ='${myLeads[i]}'>
                      ${myLeads[i]}</a>
        </li>`
        console.log(listItems)
    }
    ulEl.innerHTML = listItems
}