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
* **Logic:** Minor `translateY` and `box-shadow` changes ensure elements don’t overlap or move the layout unexpectedly.  
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

*
  **Theme Switching:**
   * Click the **Theme Toggle button** at the top of the page.
   * The color scheme changes immediately.
   * The selected theme is remembered even after refreshing the page.

* **Accessibility:**  
  Semantic elements such as `<section>` and `<article>` support screen readers.  
  Responsive images using `max-width: 100%` prevent horizontal scrolling on smaller devices.

* **Personalized Greeting:**  
  A dynamic greeting message appears at the top of the page based on the user’s local time.

---

### ⚪ Interactive Experience (Assignment 2)

#### 🔹 Step-by-Step Interaction Guide

1. **Viewing Projects**
   * Scroll to the **Projects section**.
   * All project cards are displayed by default.

2. **Filtering Projects**
   * Click on any **filter button** (e.g., HTML, JavaScript, All).
   * The page updates instantly without reloading.
   * Only the selected category of projects remains visible.

3. **Hover Feedback**
   * Move the cursor over **project cards or buttons**.
   * Elements slightly move upward and display a shadow effect.
   * This indicates that the element is interactive.

4. **Responsive Usage**
   * On smaller screens, content automatically stacks vertically.
   * Users can scroll comfortably without layout breaking or overlapping elements.

---

### ⚪ UX Improvements Introduced

* Reduced layout shifting during hover interactions.
* Clear visual feedback for clickable elements.
* Clear validation feedback for input elements.
* Faster navigation using dynamic filtering instead of page reloads.

---

### 🆕 Advanced Experience (Assignment 3)

#### 🔹 Step-by-Step Interaction Guide

1. **First Visit**
   * A glassmorphism modal appears asking for your name and gender.
   * Select your gender and click **Continue**.
   * A personalized greeting appears (e.g., "Good evening, Mr. Mohammed").

2. **Weather Widget**
   * The browser asks for your location permission.
   * If you **Allow**, real-time weather for your exact location is displayed with an animated pixel art icon.
   * If you **Deny**, weather defaults to Dhahran.
   * If the API key is activating, a polished "Demo Mode" fallback is shown.

3. **Returning Visits**
   * The login modal does not appear again — your name and gender are remembered.
   * The greeting updates based on the current time of day.

#### 🆕 UX Improvements Introduced

* Visitor persistence eliminates repetitive input on return visits.
* Geolocation provides a personalized, location-aware experience.
* Animated pixel art icons add a creative, engaging visual layer.
* Robust fallback chain ensures the UI never displays broken or empty states.
