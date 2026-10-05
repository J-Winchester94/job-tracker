const applicationForm = document.getElementById("applicationForm");
const applications = [];
const applicationList = document.getElementById("applicationList");


function renderApplications(){
    applicationList.innerHTML="";

    for (const app of applications){
        const item = document.createElement("li");
        item.textContent = app.company + " - " + app.jobTitle + " (" + app.status + ")";
        applicationList.appendChild(item);
    }
}

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
    renderApplications();
    applicationForm.reset();
});