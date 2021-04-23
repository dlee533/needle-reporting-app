// let db = firebase.firestore();

// let fileTag = document.getElementById("needlePic");
// let preview = document.getElementById("needleImg");
// preview.style.width = 400 + 'px';


// let uniqueKey = uuidv4();
// let temp;

// let itemPhotoStorageRef = firebase.storage().ref("needles/" + uniqueKey);

// function openFile(event) {

//     let reader = new FileReader();
//     let input = event.target;
//     reader.onload = function () {
//         let dataURL = reader.result;
//         //store picture to db storage and set the new profile photo path to it
//         // here
//         preview.setAttribute('src', dataURL);
//         temp = dataURL;
//     }
//     reader.readAsDataURL(input.files[0]);

//     itemPhotoStorageRef.put(input.files[0]);
// }
// function uuidv4() {
//     //unique key generator for using it as a child node name for storage references
//     //returns a multi length string used for storage photo names 
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// }