const applicationForm = document.getElementById("applicationForm");
const applications = JSON.parse(localStorage.getItem("applications")) || [];
const applicationList = document.getElementById("applicationList");

//Display the applications
function renderApplications(){
    applicationList.innerHTML="";

    applications.forEach(function (app, index){
        const item = document.createElement("li");
        item.className = "card";

        const title = document.createElement("h3");
        title.textContent = app.jobTitle;
        item.appendChild(title);

        const details = document.createElement("p");
        details.textContent = app.company + " · " + app.location;
        item.appendChild(details);

        const dateApplied = document.createElement("p");
        dateApplied.textContent = "Applied: " + app.date;
        item.appendChild(dateApplied);

        applicationList.appendChild(item);

        const statusSelect = document.createElement("select");
        const statuses = ["Applied", "Interviewing", "Offer", "Rejected"];
        const deleteButton = document.createElement("button");
        item.appendChild(statusSelect);
        item.appendChild(deleteButton);
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function(){
            if (confirm("Delete this application?")){
                applications.splice(index, 1);
                saveApplications();
                renderApplications();
            }
        });
        

        statuses.forEach(function (status){
            const option = document.createElement("option");
            option.textContent= status;
            statusSelect.appendChild(option);
        });
        statusSelect.value = app.status;
        statusSelect.addEventListener("change", function(){
            applications[index].status = statusSelect.value;
            saveApplications();
            renderApplications();
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
