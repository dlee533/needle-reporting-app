function populateTable(){
    var docRef = db.collection("Reports").where("collected", "==", false);
    docRef.get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            console.log(doc.id, "=>", doc.data());
            addRow(doc.data());
        });
    }).catch(function(error){
        console.log("Error getting documents: ", error);
    });
};



function addRow(data){
    console.log(data.address);
    let rowNode = document.createElement("TR");
    let addressNode = document.createElement("TD");
    let imgNode = document.createElement("TD");
    let noteNode = document.createElement("TD");

    addressNode.innerHTML = data.address;
    imgNode.innerHTML = "<img style='width:400px;height:auto' src=\""+data.img+"\">";
    noteNode.innerHTML = data.note;

    rowNode.appendChild(addressNode);
    rowNode.appendChild(imgNode);
    rowNode.appendChild(noteNode);

    document.getElementById("table").appendChild(rowNode);
}

populateTable();