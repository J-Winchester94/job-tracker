const applicationForm = document.getElementById("applicationForm");
const applications = JSON.parse(localStorage.getItem("applications")) || [];
const applicationList = document.getElementById("applicationList");

//Display the applications
function renderApplications(){
    applicationList.innerHTML="";

    applications.forEach(function (app, index){
        const item = document.createElement("li");
        const deleteButton = document.createElement("button");
        item.textContent = app.company + " - " + app.jobTitle + " (" + app.status + ")";
        deleteButton.textContent = "Delete";
        applicationList.appendChild(item);
        item.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(){
            if (confirm("Delete this application?")){
                applications.splice(index, 1);
                saveApplications();
                renderApplications();
            }
        });
    });
}

//Save the applications to local storage
function saveApplications(){
    const appValues = JSON.stringify(applications);
    localStorage.setItem("applications", appValues);
}


//Submit button functionality
applicationForm.addEventListener("submit", function (event){
    event.preventDefault();

    //Create Object consisting of values in the form
    const application = {
        company: document.getElementById("company").value,
        jobTitle: document.getElementById("jobTitle").value,
        location: document.getElementById("location").value,
        contact: document.getElementById("contact").value,
        date: document.getElementById("dateApplied").value,
        status: document.getElementById("status").value,
        url: document.getElementById("url").value,
        notes: document.getElementById("notes").value
    };

    applications.push(application);
    saveApplications();
    renderApplications();
    applicationForm.reset();
});


renderApplications();