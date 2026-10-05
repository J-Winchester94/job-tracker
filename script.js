const applicationForm = document.getElementById("applicationForm");

applicationForm.addEventListener("submit", function (event){
    event.preventDefault();

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

    console.log(application);
});

