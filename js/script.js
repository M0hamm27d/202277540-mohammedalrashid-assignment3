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

/* --- Real-Time Weather (Dynamic Location) --- */
async function fetchWeather() {
    const apiKey = "8489ddbf4b91c654aca7ada2860fb79d";
    //Check if the browser supports Geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            //Fetch by coordinates
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
            await getWeatherData(url);
        }, async (error) => {
            //Fallback to Dhahran if user denies location access
            console.warn("Location access denied. Falling back to default city.");
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Dhahran&units=metric&appid=${apiKey}`;
            await getWeatherData(url);
        });
    } else {
        //Browser doesn't support Geolocation
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Dhahran&units=metric&appid=${apiKey}`;
        await getWeatherData(url);
    }
}

//Separate function to handle the actual data fetching
async function getWeatherData(url) {
    try {
        const response = await fetch(url);

        //Handle 401 (Wait for API activation)
        if (response.status === 401) {
            updateWeatherUI(32, "Clear Sky (Demo Mode)", 45);
            return;
        }

        if (!response.ok) throw new Error("Weather data not available");

        const data = await response.json();
        updateWeatherUI(Math.round(data.main.temp), data.weather[0].description, data.main.humidity);

    } catch (error) {
        console.error("Error fetching weather:", error);
        document.getElementById('weather-status').textContent = "Offline";
    }
}

//Helper function to update the screen
function updateWeatherUI(temp, status, humidity) {
    document.getElementById('weather-temp').textContent = `${temp}°C`;
    document.getElementById('weather-status').textContent = status;
    document.getElementById('weather-humidity').textContent = humidity;

    //Apply Pixel Art Icon based on status
    const iconDiv = document.getElementById('weather-icon');
    iconDiv.className = "pixel-icon"; //Reset classes

    //Clear old particles
    iconDiv.querySelectorAll('.rain-drop, .snow-flake').forEach(el => el.remove());
    
    const desc = status.toLowerCase();
    if (desc.includes("clear")) {
        iconDiv.classList.add("sunny");
    } else if (desc.includes("cloud") || desc.includes("mist") || desc.includes("fog")) {
        iconDiv.classList.add("cloudy");
    } else if (desc.includes("rain") || desc.includes("drizzle") || desc.includes("thunder")) {
        iconDiv.classList.add("rainy");
        spawnParticles(iconDiv, 'rain-drop', 6);
    } else if (desc.includes("snow")) {
        iconDiv.classList.add("snowy");
        spawnParticles(iconDiv, 'snow-flake', 5);
    } else {
        iconDiv.classList.add("sunny"); //Default
    }
}

//Spawn individual rain/snow pixels with staggered timing
function spawnParticles(container, className, count) {
    for (let i = 0; i < count; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add(className);
        //Spread across the cloud width (-14px to +14px from center)
        pixel.style.left = (18 + Math.random() * 28) + 'px';
        //Start just below the cloud body
        pixel.style.top = '42px';
        //Stagger each particle so they don't all fall at once
        pixel.style.animationDelay = (Math.random() * 1.5) + 's';
        //Slight speed variation
        const baseDuration = className === 'rain-drop' ? 0.6 : 1.8;
        pixel.style.animationDuration = (baseDuration + Math.random() * 0.5) + 's';
        container.appendChild(pixel);
    }
}



//Fetch on load
fetchWeather();

