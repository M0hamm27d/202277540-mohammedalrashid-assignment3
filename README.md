# Personal Portfolio Website - Mohammed Alrashid

A professional, responsive portfolio website designed to showcase web development projects.  
⚪ **Assignment 1**: Demonstrated clean semantic HTML, advanced CSS layouts (Flexbox/Media Queries), and dynamic JavaScript functionality.  
⚪ **Assignment 2**: Added user-interactive enhancements such as section toggles, hover effects, and animation.  
🆕 **Assignment 3**: Integrated external API (OpenWeatherMap), visitor login system with persistence, animated pixel art weather icons, and geolocation-based weather detection.

---

## ⚙️ Setup Instructions

Follow these steps to get the project running on your local machine:

1. **Clone the Repository:**
    ```bash
    # Assignment 1
    git clone https://github.com/M0hamm27d/202277540-mohammedalrashid-assignment1.git
    
    # Assignment 2
    git clone https://github.com/M0hamm27d/202277540-mohammedalrashid-assignment2.git
    
    # Assignment 3
    git clone https://github.com/M0hamm27d/202277540-mohammedalrashid-assignment3.git
    ```
2. **File Structure Setup:**
    Ensure your local directory matches this structure for styles and scripts to load correctly:
    *  `index.html` (Root)  
    *  `/css/styles.css`  
    *  `/js/script.js`  
    *  `/assets/images/` (Place your images here)  
    *  `/docs/` (Technical documentation and AI usage report)
3. **Run the Project:**
    *  Open `index.html` in any modern web browser (Chrome, Firefox, Edge).  
    *  No build tools or compilers are required.

---

## 🚀 Features

This portfolio implements interactive and modern web features to enhance usability and engagement:

* ⚪ Basic project sections with semantic HTML structure (Assignment 1).  
* ⚪ Theme Persistence: Dark/light mode toggle that remembers the user preference using `localStorage`(Assignment 1).  
* ⚪ Section Filters: Buttons to dynamically show/hide different project categories.  
* ⚪ Interactive Hover Effects: Buttons and project cards have smooth feedback using `transform`, `box-shadow`, and CSS transitions.  
* 🆕 **Weather API Integration**: Real-time weather display using OpenWeatherMap API with geolocation detection.  
* 🆕 **Visitor Login & Persistence**: Welcome modal captures visitor name and gender, persists across sessions via `localStorage`.  
* 🆕 **Personalized Greeting**: Time-based greeting (morning/afternoon/evening) with Mr./Miss title based on stored gender.  
* 🆕 **Animated Pixel Art Icons**: Custom CSS pixel art weather icons (sunny, cloudy, rainy, snowy) with independent particle animations.  
* 🆕 **Graceful Error Handling**: API 401 fallback (Demo Mode), geolocation denial fallback (Dhahran), and offline error state.

---

## **AI Usage Summary**

During development:

*  **ChatGPT**: Previously used for explanations of HTML, CSS, JS basics, and Git workflows.  
* **ChatGPT**: Step-by-step explanations for DOM manipulation, event handling, section filters, hover effects, and theme logic. Debugging and architecture review.  
*  **Google Gemini**: Conceptual research support (unchanged).  
*  **Grammarly**: Documentation clarity and grammar polishing (unchanged).  
* 🆕 **Antigravity (Google AI)**: API integration guidance, CSS pixel art design, animation development, geolocation implementation, and error-handling architecture.

> AI was used as a **conceptual guide** and **not for blind code generation**. All suggestions were reviewed, modified, and rewritten to ensure originality.

---

## 📁 Repository Overview

| File | Role |
| :--- | :--- |
| ⚪ `index.html` | Semantic HTML structure for content, sections, and accessibility. |
| ⚪ `css/styles.css` | Layout styling, dark theme, responsive media queries. |
| ⚪ `css/styles.css` | Hover animations, section toggles, interactive feedback. |
| ⚪ `js/script.js` | Greeting, theme toggle logic. |
| ⚪ `js/script.js` | Section filtering, button interaction logic. |
| ⚪ `/assets/images/` | Optimized project and profile images (WebP/JPG). |
| ⚪ `/docs/ai-usage-report.md` | AI usage report and reflections. |
| ⚪ `/docs/technical-documentation.md` | Technical documentation for new features and logic. |
| 🆕 `index.html` | Visitor login modal, weather widget container, viewport meta tag. |
| 🆕 `css/styles.css` | Pixel art icons, weather card glassmorphism, particle animations. |
| 🆕 `js/script.js` | Weather API fetch, geolocation, visitor persistence, particle spawning. |
| 🆕 `.gitignore` | Standard web project ignore rules. |

---

## 📌 Notes

* ⚪ Focused on usability and responsive design (Assignment 1).  
* ⚪ Emphasis on **interactive and modern features**, fully functional across devices.  
* All new features were implemented with careful testing, preserving professional design and layout integrity.  
* 🆕 External API integration with robust error handling (401 fallback, geolocation denial, offline state).  
* 🆕 State management expanded: visitor name, gender, theme, and login status all persisted via `localStorage`.  
* 🆕 Creative pixel art animations demonstrate advanced CSS techniques (`box-shadow`, `@keyframes`, `filter`).