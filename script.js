
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration (object)
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional 
  const firebaseConfig = {
    apiKey: "AIzaSyCYOTzbMDaq__8-nPXWPDyunF1orer4WoQ",
    authDomain: "marketing-6afb0.firebaseapp.com",
    projectId: "marketing-6afb0",
    storageBucket: "marketing-6afb0.firebasestorage.app",
    messagingSenderId: "665579360980",
    appId: "1:665579360980:web:957a19fefd39a33362a141",
    measurementId: "G-XWBX2SLDXH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
    
// get selement by id stuff
 
const db = getDatabase(app)
  
document.getElementById("submit").addEventListener('click', function(e){
  set(
    ref(db, 'user/' + document.getElementById("x").value),
    {
      x: document.getElementById("x").value,
    }
  )
})

//450 Marketing Firebase Database