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
		Room_names = childKey;
		//Start code
  console.log(Room_names);
  htmlrow="<div class='room_name' id="+Room_names+"onclick='redirectToRoom(this.id)'>"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=htmlrow;
		//End code
		});});}
  getData();
  function addroom(){
		roomname1=document.getElementById("room_name").value;
		firebase.database().ref("/").child(roomname1).update({
			  purpose:"adding room"
		})};