import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings ={
  databaseURL: "https://endorse-b4353-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app =initializeApp(appSettings)
const database = getDatabase(app)

const endorsementListINDB = ref(database, "Endorsements")

const messageEl = document.getElementById("message-el")
const publishEl = document.getElementById("publish-el")
const endorsementListEl =document.getElementById("endorsement-list")