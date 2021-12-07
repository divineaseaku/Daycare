
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

//Variable to access database collection
const database = firestore.collection("fomData")

//Get Submit Form
let submitForm = document.getElementById('submit');
//fucntion for document.getElementById
function getInputVal(id) {
    return document.getElementById(id);
}

//Create Event Listener To Allow Form Submission
submitForm.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //get values
  let childsName = getInputVal('childs-name').value
  let parentsName = getInputVal('parents-name').value
  let childsAge = getInputVal('childs-age').value
  let parentsEmail = getInputVal('parents-email').value
  let phone = getInputVal('phone').value
  let address = getInputVal('address').value
  let moreInfo = getInputVal('more-info').value

  //Save Form Data To Firebase
    database.doc().set({
       childsName: childsName,
        parentsName: parentsName,
        childsAge: childsAge,
        parentsEmail: parentsEmail,
        phone: phone,
        address: address,
        moreInfo: moreInfo
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    //Clear Form
    document.getElementById('reg-form').reset();
});


//Get Data From Firebase
let searchForm = document.getElementById('search');
searchForm.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()  
    //Get Values



    let name = getInputVal('lookup-name').value
    let age= getInputVal('lookup-age').value 
    firebase.firestore().collection("fomData").where("childsName", "==", name).where("childsAge", "==", age).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
});


    // firebase.database().ref('fomData').orderByChild('childsAge').equalTo(age).on('value', function(snapshot) {
    //     snapshot.forEach(function(data) {
    //         console.log(data.val().childsName)
    //         console.log(data.val().childsAge)
    //         console.log(data.val().parentsName)
    //         console.log(data.val().parentsEmail)
    //         console.log(data.val().phone)
    //         console.log(data.val().address)
    //     });
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });
  








