// --- Visitor Persistence Logic ---
const modal = document.getElementById('login-modal');
const nameInput = document.getElementById('visitor-name');
const continueBtn = document.getElementById('login-continue');
const genderButtons = document.querySelectorAll('.gender-btn');
let selectedGender = "";

//1. Handle Gender Selection
genderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        genderButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedGender = btn.getAttribute('data-gender');
    });
});

//2. Handle Continue Action
continueBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name === "" || selectedGender === "") {
        alert("Please provide both your name and gender!");
        return;
    }
    //Save to Local Storage
    localStorage.setItem('visitorName', name);
    localStorage.setItem('visitorGender', selectedGender);
    // Hide Modal and Update Greeting
    modal.style.display = 'none';
    displayGreeting();
});
//3. Function to Display the Personalized Greeting
function displayGreeting() {
    const storedName = localStorage.getItem('visitorName');
    const storedGender = localStorage.getItem('visitorGender');
    //If no name stored, keep modal visible
    if (!storedName) {
        modal.style.display = 'flex';
        return;
    }
    // Otherwise, hide modal and show greeting
    modal.style.display = 'none';
    
    const now = new Date();
    const hour = now.getHours();
    let timeGreeting = "";

    if (hour < 12) timeGreeting = "Good morning";
    else if (hour < 18) timeGreeting = "Good afternoon";
    else timeGreeting = "Good evening";

    const title = (storedGender === "male") ? "Mr." : "Miss";
    
    // Create the greeting element
    const header = document.querySelector('#about-me');
    
    // Remove existing greeting if any (to avoid duplicates)
    const existingGreeting = header.querySelector('.greeting');
    if (existingGreeting) existingGreeting.remove();

    const fullGreeting = document.createElement('p');
    fullGreeting.classList.add('greeting');
    fullGreeting.textContent = `${timeGreeting}, ${title} ${storedName}`;
    
    // Add to page
    header.prepend(fullGreeting);
}

// Run the check on page load
displayGreeting();

const toggleButton = document.getElementById("theme-toggle");
//Is there a value stored under the key ‘theme’? "dark" || "light" || "null"
const savedTheme = localStorage.getItem("theme");

//Applying Theme on Page Load
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
}
//Toggling theme on click --> when clicked run this function
toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme"); //It flips between states for body
    //Saving current theme
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
});

//Selecting filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');

//Selecting all projects
const projects = document.querySelectorAll('.project');

//Loop through buttons
filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        //Remove active class from all buttons
        filterButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        //Add active class to the clicked button
        button.classList.add('active');
        //Getting the filter value from the button's data attribute
        const filterValue = button.getAttribute('data-filter');

        projects.forEach(function (project) {
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
const formNameInput = document.querySelector('#name'); // Renamed to avoid title conflict
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

//Selecting message container
const formMessage = document.querySelector('#form-message');

//Listening for submit event
form.addEventListener('submit', function (event) {

    //Prevent page refresh
    event.preventDefault();

    //Check inputs
    if (formNameInput.value === '' || emailInput.value === '' || messageInput.value === '') {

        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        formMessage.style.display = "block";
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

    }
    else if (!emailInput.checkValidity()) {

        formMessage.textContent = "Please enter a valid email address , a valid email address must follow this pattern: example@example.com";
        formMessage.style.color = "red";
        formMessage.style.display = "block";
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

    }
    else {

        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        formMessage.style.display = "block";
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        form.reset();
    }

});