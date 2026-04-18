//Getting current time
const now = new Date();
const hour = now.getHours(); //0-23

//Selecting where to show the greeting 
const header = document.querySelector('#about-me');
//Creating a new paragraph element
const greeting = document.createElement('p');

//Setting text based on time 
if (hour < 12 ){
    greeting.textContent = "Good morning";
}
else if (hour < 18){
    greeting.textContent = "Good afternoon";
}
else{
    greeting.textContent = "Good evening";
}

//Adding class for styling later 
greeting.classList.add('greeting');
//Inserting the greeting at the top of header
header.prepend(greeting);

const toggleButton = document.getElementById("theme-toggle");
//Is there a value stored under the key ‘theme’? "dark" || "light" || "null"
const savedTheme = localStorage.getItem("theme");

//Applying Theme on Page Load
if(savedTheme ==="dark"){
    document.body.classList.add("dark-theme")
}
//Toggling theme on click --> when clicked run this function
toggleButton.addEventListener("click",function(){
    document.body.classList.toggle("dark-theme"); //It flips between states for body
    //Saving current theme
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
});

//Selecting filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');

//Selecting all projects
const projects = document.querySelectorAll('.project');

//Loop through buttons
filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        //Remove active class from all buttons
        filterButtons.forEach(function(btn){
            btn.classList.remove('active');
        });
        //Add active class to the clicked button
        button.classList.add('active');
        //Getting the filter value from the button's data attribute
        const filterValue = button.getAttribute('data-filter');

        projects.forEach(function(project) {
            //Getting the category of the project from its data attribute
            const category = project.getAttribute('data-category');
            //Show project if filter is 'all' or matches the project's category
            if (filterValue === 'all' || filterValue === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }

        });

    });
});

//Selecting the form
const form = document.querySelector('#contact-form');

//Selecting inputs
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

//Selecting message container
const formMessage = document.querySelector('#form-message');

//Listening for submit event
form.addEventListener('submit', function(event){

    //Prevent page refresh
    event.preventDefault();

    //Check inputs
    if(nameInput.value === '' || emailInput.value === '' || messageInput.value === ''){

        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";

    }
    else{

        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";

        form.reset();
    }

});