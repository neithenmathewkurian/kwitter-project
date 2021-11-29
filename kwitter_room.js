const firebaseConfig = {
	apiKey: "AIzaSyDw_GqH3QyLRIWpwhqreJ8k9CByAl4mbG0",
	authDomain: "kwitter-71d98.firebaseapp.com",
	databaseURL: "https://kwitter-71d98-default-rtdb.firebaseio.com",
	projectId: "kwitter-71d98",
	storageBucket: "kwitter-71d98.appspot.com",
	messagingSenderId: "73801451639",
	appId: "1:73801451639:web:d60c3e31c16c5c1a3a1e72"
  };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);
var name1=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+name1+"!";
function getData() {
	firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;