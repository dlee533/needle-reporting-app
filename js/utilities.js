class Information {
    constructor(address, contact, note) {
        this.address = address;
        this.contact = contact;
        this.note = note;
        this.ID = "needle" + address;
        this.collected = false;
        this.img = "https://firebasestorage.googleapis.com/v0/b/sr-limited.appspot.com/o/needles%2Fneedle20.jpg?alt=media&token=36e54d0d-a98b-4a90-b914-5b66a39d2856"
        // console.log("hello");
        // for (let i = 0; i < this.address.length; i++) {
        //     console.log("we are inside the for loop");
            
        //     }
        // }
    }
}


function informationClassBuilder() {
    let newinfo = new Information(
        document.getElementById("location").value,
        document.getElementById("contact").value,
        document.getElementById("note").value,
    );
    return newinfo;
}

function submitInfo(event) {
    /*
    Handle the form submit button onclick.
    :post-condition: Will get an assignment instance built
    :post-condition: will request confirmation from user to submit
    :post-condition: upon confirmation will submit the assignment to DB
    :post-condition: will print to console if sessionStorage.needsDetails does not exist
    */
    event.preventDefault();
    let informationInstance = informationClassBuilder();
    if (confirm("Please confirm the submission")) {
        sendInformation(informationInstance);
    }
}

document.getElementById('submitButton').onclick = submitInfo;


function sendInformation(InformationInstance) {
    /**
     * Send assignmentInstace to DB
     *
     * :precondition: InformationInstance must be an instance of User
     * :precondition: must have access to firestore
     * :precondition: no property of InformationInstance must be undefined
     * :post-condition: will send the InformationInstance to DB
     * :post-condition: will log if success or failure
     * :post-condition: will alert the user upon success or failure
     */
    db.collection("Reports").doc(InformationInstance.ID).set({
        'address': InformationInstance.address,
        'contact': InformationInstance.contact,
        'note': InformationInstance.note,
        'collected': InformationInstance.collected,
        'img': InformationInstance.img
    }).then(() => {
        console.log('Assignment sent succesfully');
        // the if blocks until user confirms
        if (!alert('Thanks a lot for your contribution. Its a huge help!')) { }
        window.location = "./index.html";
    }).catch((err) => {
        // if blocks for user feedback
        if (!alert('Failed to submit assignment.\nerror code:', err)) { }
        console.log('firebase let you down when sending assignment', err);
    });
}