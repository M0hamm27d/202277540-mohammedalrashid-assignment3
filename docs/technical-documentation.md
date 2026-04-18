# Technical Details

A professional, responsive portfolio website designed to showcase web development projects.  
This project demonstrates clean semantic HTML, advanced CSS layouts (Flexbox/Media Queries), dynamic JavaScript functionality, interactive user enhancements, external API integration, and creative CSS pixel art animations.

---

## 🛠 Technical Details

This project focuses on clean code, modular logic, and modern web standards.

### 1. Persistent Dark Mode ⚪
The theme toggle uses `localStorage` to remember user preference.
* **Logic:** On page load, JavaScript checks `localStorage`. If `"dark"` is stored, it applies the `.dark-theme` class to `<body>`.  
* **Toggle Behavior:** Clicking the button flips between light and dark themes and updates the stored value.

### 2. Time-Aware Greeting ⚪
A personalized greeting displays based on the user's local time.
* **Logic:** `Date().getHours()` is used to determine morning, afternoon, or evening. A `<p>` element is dynamically created and inserted at the top of the header.

### 3. Responsive Architecture ⚪
Layout adjusts for multiple screen sizes:
* **Desktop:** Flexbox with `justify-content: space-between` for a horizontal header.  
* **Mobile (< 768px):** `flex-direction: column` with stacked content for portrait orientation.  
* **Images:** `max-width: 100%` and fixed height to prevent overflow.

### 4. Section Filters ⚪
Users can filter project cards by category using interactive buttons.
* **Logic:** Buttons are linked to project categories via `data-attributes`.  
* **Implementation:**  
  * Clicking a button triggers an event listener.  
  * JavaScript iterates over all project cards and toggles their visibility using `.style.display`.

### 5. Interactive Hover Effects ⚪
Subtle animations provide feedback for buttons and project cards.
* **Logic:** CSS `transform`, `box-shadow`, and transitions are applied on `:hover`.  
* **UX Benefit:** Improves perceived responsiveness and guides user interactions.

### 6. Layout Stability ⚪
Hovering project cards no longer disrupts adjacent elements.
* **Logic:** Minor `translateY` and `box-shadow` changes ensure elements don't overlap or move the layout unexpectedly.  
* **UX Benefit:** Smooth, stable interactions enhance professionalism and readability.

### 7. Responsive Design ⚪
Ensures usability across devices with the new interactive features.
* **Logic:** Media queries and flexbox adjustments maintain readability and interactive accessibility.  
* **UX Benefit:** Users on tablets, phones, and desktops receive a consistent and optimized experience.

### 8. Weather API Integration 🆕
Real-time weather data displayed in the header card using the OpenWeatherMap API.
* **Logic:** `fetch()` with `async/await` sends a request to the API. The response is parsed as JSON and temperature, description, and humidity are extracted.  
* **Error Handling:** HTTP 401 triggers a "Demo Mode" fallback. Network errors display "Offline". Both ensure the UI never breaks.

### 9. Geolocation-Based City Detection 🆕
The weather widget automatically detects the visitor's city.
* **Logic:** `navigator.geolocation.getCurrentPosition()` retrieves the user's latitude and longitude. These coordinates are passed to the API as `lat` and `lon` parameters.  
* **Fallback:** If the user denies location access, the system defaults to Dhahran.

### 10. Visitor Login & Persistence 🆕
A welcome modal captures the visitor's name and gender on first visit.
* **Logic:** On page load, JavaScript checks `localStorage` for `visitorName`. If absent, the modal is displayed. When submitted, name and gender are saved to `localStorage`.  
* **Greeting:** A personalized greeting (e.g., "Good afternoon, Mr. Mohammed") is dynamically created and prepended to the header.

### 11. Animated CSS Pixel Art Weather Icons 🆕
Custom pixel art icons represent weather conditions using the CSS `box-shadow` technique.
* **Logic:** Each icon state (sunny, cloudy, rainy, snowy) is a separate CSS class applied to a `::before` pseudo-element. The `box-shadow` property paints individual 4×4px pixels with multi-tone shading.  
* **Independent Particles:** Rain drops and snowflakes are spawned as individual DOM elements via `spawnParticles()`, each with randomized `animation-delay` and `animation-duration` for independent movement.

### 12. Weather Status → Icon Mapping 🆕
The API description string is dynamically mapped to the correct pixel art class.
* **Logic:** `updateWeatherUI()` checks the lowercase description for keywords like "clear", "cloud", "rain", "snow" and applies the corresponding CSS class (`sunny`, `cloudy`, `rainy`, `snowy`).

---

## 🌟 User Experience (UX)

The site is designed with a **user-first mentality**, focusing on clarity, interactivity, and responsiveness.

### ⚪ Core Experience (Assignment 1)

#### 🔹 Step-by-Step Interaction Guide

1. **Opening the Website**
   * Open `index.html` in any modern browser (Chrome, Firefox, or Edge).
   * The page loads with the **light theme** by default.
   * A **personalized greeting** (e.g., "Good morning") appears at the top of the header section based on your local time.

2. **Toggling the Theme**
   * Locate the **"Toggle Theme"** button at the top-left corner of the page.
   * Click it once — the entire page switches to **dark mode** (dark background, light text).
   * Click it again — the page returns to **light mode**.
   * **Persistence Check:** Refresh the page (press F5 or Ctrl+R). The theme you last selected remains active — it is saved in `localStorage`.

3. **Viewing the Header**
   * The header displays your **name**, a short **introduction paragraph**, and a **profile image**.
   * Two hero buttons are visible: **"View Projects"** and **"Contact Me"**.
   * Clicking **"View Projects"** scrolls smoothly to the Projects section.
   * Clicking **"Contact Me"** scrolls smoothly to the Contact form section.

4. **Accessibility**
   * The page uses semantic HTML elements: `<header>`, `<section>`, `<article>`, `<form>`.
   * Screen readers can navigate the page structure logically.
   * All images have `alt` attributes describing their content.
   * The profile image uses the WebP format for faster loading.

---

### ⚪ Interactive Experience (Assignment 2)

#### 🔹 Step-by-Step Interaction Guide

1. **Viewing Projects**
   * Scroll down to the **"Projects" section** (or click the "View Projects" button).
   * All project cards are displayed by default in a vertical list.
   * Each card shows a **title**, **description**, and **placeholder image**.

2. **Filtering Projects by Category**
   * Above the project cards, locate the **filter buttons**: "All", "HTML", "JavaScript".
   * Click **"HTML"** — only projects tagged with the `html` category remain visible. The JavaScript project card disappears.
   * Click **"JavaScript"** — only the JavaScript-tagged project is shown. The HTML project disappears.
   * Click **"All"** — all project cards reappear.
   * The active filter button is visually highlighted to indicate the current selection.
   * **Note:** Filtering happens instantly with no page reload.

3. **Hover Feedback on Cards and Buttons**
   * Move your mouse cursor over any **project card**.
   * The card slightly lifts upward (`translateY`) and gains a soft **shadow effect**.
   * Move your cursor away — the card smoothly returns to its original position.
   * Hover over any **button** (filter, hero, or submit) — the button subtly changes color and lifts.
   * **Purpose:** This feedback tells you the element is interactive and clickable.

4. **Submitting the Contact Form**
   * Scroll to the **"Contact Me" section** at the bottom of the page.
   * Three fields are visible: **Name**, **Email**, and **Message**.
   * **Test 1 — Empty submission:** Click **"Send"** without filling any fields. A red error message appears: *"Please fill in all fields."*
   * **Test 2 — Invalid email:** Fill in the Name and Message fields, but type an invalid email (e.g., "abc"). Click **"Send"**. A red error appears: *"Please enter a valid email address..."*
   * **Test 3 — Successful submission:** Fill in all three fields with valid data (e.g., Name: "Ahmed", Email: "ahmed@test.com", Message: "Hello"). Click **"Send"**. A green success message appears: *"Message sent successfully!"* The form fields reset automatically.
   * **Smooth Scroll:** After each submission attempt, the page scrolls to the message so you can always see the feedback.

5. **Responsive Layout Testing**
   * Resize your browser window to a narrow width (below 768px) or open on a mobile device.
   * The header layout switches from **horizontal** (side-by-side) to **vertical** (stacked).
   * Project cards, buttons, and the contact form all stack vertically for comfortable mobile scrolling.
   * No elements overlap or break out of the viewport.

---

### ⚪ UX Improvements Introduced

* Reduced layout shifting during hover interactions.
* Clear visual feedback for clickable elements.
* Clear validation feedback for input elements.
* Faster navigation using dynamic filtering instead of page reloads.

---

### 🆕 Advanced Experience (Assignment 3)

#### 🔹 Step-by-Step Interaction Guide

1. **First Visit — Login Modal**
   * Open the website for the **first time** (or clear `localStorage` in DevTools > Application > Local Storage).
   * A **glassmorphism modal** (frosted glass effect) appears centered on the screen with the title: *"Welcome to my Portfolio!"*
   * The modal asks for two things: your **name** (text input) and your **gender** (Male/Female buttons).
   * Click **"Male"** or **"Female"** — the selected button highlights to confirm your choice.
   * Type your name in the input field (e.g., "Mohammed").
   * **Error test:** Click **"Continue"** without filling both fields — an alert appears: *"Please provide both your name and gender!"*
   * Fill in both fields and click **"Continue"** — the modal slides away and a personalized greeting appears.

2. **Personalized Greeting**
   * After the modal closes, a greeting line appears at the **top of the header**.
   * The greeting combines the **time of day** + **title** + **your name**:
     * Before 12 PM: *"Good morning, Mr. Mohammed"*
     * 12 PM – 6 PM: *"Good afternoon, Mr. Mohammed"*
     * After 6 PM: *"Good evening, Mr. Mohammed"*
   * If you selected **Female**, the title shows *"Miss"* instead of *"Mr."*
   * **Persistence Check:** Refresh the page — the modal does NOT appear again. The greeting updates automatically based on the current time.

3. **Weather Widget — Location Permission**
   * In the header card, a **weather widget** is visible below the hero buttons.
   * On first load, the browser shows a **location permission prompt**: *"This site wants to know your location."*
   * **If you click "Allow":**
     * The widget fetches real-time weather data for your exact GPS coordinates.
     * The temperature, weather description (e.g., "clear sky"), and humidity percentage are displayed.
     * An **animated pixel art icon** matching the current weather appears (sun, cloud, rain, or snow).
   * **If you click "Block/Deny":**
     * The widget gracefully falls back to showing weather for **Dhahran, Saudi Arabia**.
     * No error messages or broken UI elements appear.

4. **Weather Widget — Pixel Art Icons**
   * The weather icon is a **custom CSS pixel art animation** rendered in real-time:
     * **☀️ Clear/Sunny:** A multi-tone shaded sun with 8 directional rays that slowly rotates and pulses with a warm glow.
     * **☁️ Cloudy:** A puffy, 4-layer shaded cloud with a static sun peeking behind it. The cloud gently floats up and down.
     * **🌧️ Rainy:** A dark shaded cloud with **individual rain drops** falling independently beneath it. Each drop has its own speed and timing.
     * **❄️ Snowy:** A bright white cloud with **individual snowflakes** drifting downward with a gentle sway. Each flake fades out as it reaches the bottom.
   * **Testing each icon manually:** Open the browser console (F12 → Console tab) and type:
     * `updateWeatherUI(32, 'Clear Sky', 40);` → Shows the sunny icon.
     * `updateWeatherUI(25, 'Broken Clouds', 65);` → Shows the cloudy icon with sun behind.
     * `updateWeatherUI(18, 'Heavy Rain', 85);` → Shows the rain icon with falling drops.
     * `updateWeatherUI(2, 'Light Snow', 90);` → Shows the snow icon with drifting flakes.

5. **Weather Widget — Error Handling & Fallbacks**
   * **API Key Activating (401 Error):** If the OpenWeatherMap API key is still propagating, the widget shows *"Clear Sky (Demo Mode)"* with 32°C and 45% humidity — ensuring the UI always looks polished.
   * **Network Error:** If the internet is disconnected or the API is unreachable, the weather status displays *"Offline"* — no crashes or empty elements.
   * **Geolocation Unsupported:** If the browser does not support geolocation (very rare), the widget defaults to Dhahran weather.

6. **Returning Visits**
   * Close and reopen the browser, or refresh the page.
   * The **login modal does NOT appear** — your name and gender are saved in `localStorage`.
   * The **greeting automatically updates** based on the current time of day.
   * The **weather widget re-fetches** fresh data on every page load.
   * The **theme** (light/dark) remains as you last set it.

7. **Dark Mode with Weather Widget**
   * Click the **"Toggle Theme"** button to switch to dark mode.
   * The weather widget, pixel art icons, and all text adapt to the dark background.
   * Drop shadows on the pixel art icons provide high contrast, ensuring visibility in both themes.
   * Toggle back to light mode — everything transitions smoothly.

#### 🆕 UX Improvements Introduced

* Visitor persistence eliminates repetitive input on return visits.
* Geolocation provides a personalized, location-aware experience.
* Animated pixel art icons add a creative, engaging visual layer.
* Robust fallback chain (geolocation → default city → demo mode → offline) ensures the UI never displays broken or empty states.
* Independent particle animations (rain/snow) create a dynamic, living feel.
* High-contrast drop shadows ensure pixel art visibility across light and dark themes.
