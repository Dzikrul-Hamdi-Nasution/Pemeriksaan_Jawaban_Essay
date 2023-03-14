var config = {
  apiKey: "AIzaSyBAjW2GvqxaKuMbEScZYA45SqmGRM0rR5g",
  authDomain: "essay-cbt.firebaseapp.com",
  databaseURL: "https://essay-cbt-default-rtdb.firebaseio.com",
  projectId: "essay-cbt",
  storageBucket: "essay-cbt.appspot.com",
  messagingSenderId: "67438651443",
  appId: "1:67438651443:web:2033cc4afd6e15936cdb46",
  measurementId: "G-HH76GCD94E"
};
  firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // User is signed in.
     window.location.replace("soal.html")
     
  } else {
      // No user is signed in.
      
  }
});

function masuk() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage);
  });
}

