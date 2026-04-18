# AI Usage Report

## 🛠 Tools Used & Use Cases

**AI Tools Used:**
* **ChatGPT**: Primary guided assistant.
* **Google Gemini**: Secondary conceptual research.
* **Grammarly**: Documentation polishing and grammar correction.
* 🆕 **Antigravity (Google AI)**: Advanced pair-programming assistant for API integration, CSS animation design, and architecture.

**Date of Access:**
* ⚪ Mar 12, 2026 – Present
* 🆕 Apr 18, 2026 – Assignment 3 development session

---

## 📖 How Each Tool Was Used

### ChatGPT
Used as a **guided assistant** rather than a solution generator. It was primarily utilized for:
*  Step-by-step explanations of HTML, CSS, and JavaScript concepts (Assignment 1).  
*  Step-by-step explanations of CSS, and JavaScript concepts for interactive features.  
*  Debugging minor errors (e.g., method typos, DOM issues).  
*  Reviewing structure and style, suggesting architectural improvements.  
*  Generating conceptual code snippets for understanding (not for blind copy-pasting).  

> **Prompt Strategy:** Prompts were structured to ensure explanations of each tag, clear expected outputs, strict adherence to assignment instructions, and concept-check questions to verify understanding.

### Google Gemini
*  Previously: Gathered alternative clarifications and conceptual understanding.  
*  Continued: Used to compare complex explanations, deepening conceptual understanding without disrupting structured CoT.

### Grammarly
*  Grammar correction and language polishing during final documentation phase (remains unchanged).

### 🆕 Antigravity (Google AI)
*  Pair-programming assistant for real-time code generation and debugging.
*  Guided the OpenWeatherMap API integration with `async/await` and `fetch()`.
*  Designed the CSS pixel art weather icons using the `box-shadow` technique.
*  Implemented the Geolocation API with fallback logic.
*  Created the independent particle animation system using JS-spawned DOM elements.
*  Performed iterative design reviews for icon shading, shadows, and animations.

> **Prompt Strategy:** Collaborative pair-programming approach with iterative feedback loops. Each feature was reviewed, tested, and refined through multiple rounds of visual verification.

---

## 💡 Reflection on Recommended Tools
*  ChatGPT and Gemini fulfilled the AI roles effectively; maintained the conceptual guide role without replacing independent work.

---

## 📈 Benefits & Challenges

### Benefits
* ⚪ Breaking down complex concepts in Assignment 1.  
* ⚪ Breaking down new concepts like `querySelectorAll`, `hover` effects, `transform`, `animation`, and dynamic `event` handling.  
* ⚪ Debugging assistance for typos and classList issues.  
* ⚪ Strengthened understanding of DOM manipulation, event handling, responsive design principles, and interactive styling patterns.
* 🆕 Rapid prototyping of complex CSS pixel art using the `box-shadow` technique.
* 🆕 Guided implementation of the Geolocation API and multi-layer error handling.
* 🆕 Iterative design refinement through real-time visual feedback and code review cycles.

### Challenges & Limitations
* ⚪ Verification and manual review required.  
* ⚪ Academic integrity: conscious avoidance of blind code adoption.  
* ⚪ Additional care to integrate new interactive features safely while maintaining existing functionality.
* 🆕 CSS `box-shadow` pixel art limitations: all pixels in a single pseudo-element move as one unit, requiring JS-based particle spawning for independent animations.
* 🆕 API key activation delay required designing a "Demo Mode" fallback to maintain UI polish during the propagation window.
* 🆕 Balancing between AI suggestions and personal understanding — each suggestion was tested, understood, and adapted before adoption.

---

## 🎓 Learning Outcomes

Through the integrated use of AI guidance and independent implementation, I strengthened my understanding of the following concepts:

### HTML & Browser Behavior
* ⚪ Previously: Semantic understanding of form, section, and input attributes.  
* ⚪ Element Identification: Understanding the purpose of the `id` attribute and how it uniquely identifies elements within the DOM.

### JavaScript & DOM
* ⚪ Previously: `localStorage`, `.classList`, `.addEventListener()`, `.toggle()`, `Date` object usage.  
* ⚪ DOM Selection: Using `document.querySelector()` and `document.querySelectorAll()` to access HTML elements.  
* ⚪ Event Handling: Implementing `.addEventListener()` to respond to user interactions.  
* ⚪ DOM Manipulation: Using `.classList` methods to dynamically modify element styles.  
* ⚪ Form Handling: Controlling form behavior with `event.preventDefault()` and resetting form inputs using `.reset()`.  
* ⚪ Attribute Access: Retrieving element attributes with `.getAttribute()`.
* 🆕 Asynchronous JavaScript: Using `async/await` with `fetch()` for non-blocking API calls.
* 🆕 Geolocation API: Using `navigator.geolocation.getCurrentPosition()` with success and error callbacks.
* 🆕 Error Handling: Implementing `try/catch` blocks and HTTP status code checks for robust API error management.
* 🆕 Dynamic DOM Creation: Using `document.createElement()` and randomized inline styles for particle animation systems.

### CSS & Styling
* ⚪ Previously: Dark theme toggle, Flexbox layouts, media queries, responsive stacking, image scaling.  
* ⚪ Hover Effects: Using `transform`, `box-shadow`, and animations to create subtle interactive feedback.  
* ⚪ Layout Stability: Adjusting styling to prevent element overlap during hover interactions.  
* ⚪ Responsive Design: Adjusting layout using flexbox and media queries to ensure usability on different devices.
* 🆕 CSS Pixel Art: Using the `box-shadow` technique to paint individual pixels with multi-tone shading.
* 🆕 CSS Animations: Using `@keyframes` for rotation, floating, falling, and drifting effects.
* 🆕 CSS Filters: Using `drop-shadow()` and `filter` for ambient glows and high-visibility shadows.
* 🆕 Glassmorphism: Applying `backdrop-filter: blur()` and semi-transparent backgrounds for modal styling.

---

## 🛡 Responsible Use & Modifications
AI-generated suggestions were **never used blindly**. 

1. **Originality**: All structural decisions (layout, file organization, naming conventions) were made independently.  
2. **Personal Touch**: Variable names, comments, commit messages, and UI text were written personally.  
3. **Adaptation**: Code suggestions were reviewed, rewritten, and adjusted to fit specific assignment requirements.  
4. **Verification**: No concept was implemented until it was fully understood.  
5. 🆕 **Iterative Refinement**: Pixel art icons went through multiple rounds of visual review and redesign based on personal feedback.
6. 🆕 **Architecture Decisions**: The choice to use JS-spawned particles instead of CSS-only pseudo-elements was a deliberate decision to achieve independent animation, understood and implemented collaboratively.

**Conclusion:** The project structure, logic flow, and implementation remain original. AI served as a conceptual guide, pair-programming partner, and reviewer rather than a replacement for independent work.