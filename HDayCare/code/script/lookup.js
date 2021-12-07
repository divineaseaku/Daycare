
const firebaseConfig = {
  apiKey: "AIzaSyAUcYZ53X0d61hTVItmngO923FBU4Y_RPg",
  authDomain: "happydaycare-fb76f.firebaseapp.com",
  projectId: "happydaycare-fb76f",
  storageBucket: "happydaycare-fb76f.appspot.com",
  messagingSenderId: "920814817548",
  appId: "1:920814817548:web:819eb2d634dfee8b40f929",
  measurementId: "G-507JMDMK6Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore()


//Get Data From Firebase

//function for document.getElementById
function getInputVal(id) {
  return document.getElementById(id);
}


//const dbValue = firestore.ref('fomData');
var dbValue = firestore.collection("fomData").get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(client) {

      //add event listener to search button
      searchButton.addEventListener('click', function(e){
  //get values from firebase
     // if (client.data().name == lookupName && client.data().age == lookupAge) {
       
        var Name = client.data().childsName
        var Age = client.data().childsAge
        var  parentsName = client.data().parentsName
        var  Phone = client.data().phone
        var  parentsEmail = client.data().parentsEmail
        var Address = client.data().address
        var Info = client.data().moreInfo
     
        //display user data
        getInputVal("display-info").innerHTML = `
        <div> ${JSON.stringify(client.data().address) } </div>
        `;
      //}

      });
      
        // client.data() is never undefined for query doc snapshots
        //console.log(client.id, " => ", client.apiKey);
        console.log(client.id, " => ", client.data());
    });
});




