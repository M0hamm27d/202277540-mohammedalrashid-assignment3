# Technical Details

A professional, responsive portfolio website designed to showcase web development projects.  
This project demonstrates clean semantic HTML, advanced CSS layouts (Flexbox/Media Queries), dynamic JavaScript functionality, and interactive user enhancements.

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
