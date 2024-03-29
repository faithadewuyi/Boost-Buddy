import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js" //step 3 gotten standard import for real-time data

const appSettings ={
  databaseURL: "https://endorse-b4353-default-rtdb.europe-west1.firebasedatabase.app/"
}//Step 1 URL copied from firebase

const app =initializeApp(appSettings)//Step 2
const database = getDatabase(app)//step 2

const endorsementListINDB = ref(database, "Endorsements")

const messageEl = document.getElementById("message-el")
const publishEl = document.getElementById("publish-el")
const endorsementListEl =document.getElementById("endorsement-list")

publishEl.addEventListener("click", function(){
  let messageValue= messageEl.value

  push(endorsementListINDB, messageValue)
  clearTextAreaEl()
  
  

})
onValue(endorsementListINDB, function(snapshot){
  let itemArray = Object.entries(snapshot.val())
  clearEndosementListEl()
  
  for (let i = 0; i < itemArray.length; i++){
    let currentItem = itemArray[i]
    let currentItemID = currentItem[0]
    let currentItemValue = currentItem[1]
    appendMessageToList(currentItemValue)
    
  }
})

function clearEndosementListEl(){
  endorsementListEl.innerHTML = ""
}

function clearTextAreaEl () {
  messageEl.value =""
}
function appendMessageToList (itemValue){

  let newEl = document.createElement("p")

  newEl.textContent = itemValue;

  newEl.addEventListener("click", function() {
    let exactLocationOfItemInDB = ref(database, `Endorsements/${itemID}`)
    
    remove(exactLocationOfItemInDB)
})

  endorsementListEl.append(newEl)
 
}