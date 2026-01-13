<h1>☕ Homework 2 — Feedback Widget (Events & Component State)</h1>

<p>
This project is part of the React homework series and focuses on
<b>events handling</b>, <b>component state</b>, and <b>state persistence</b>.
The application collects user feedback for <b>Sip Happens Café</b> and displays
statistics based on user interaction.
</p>

<hr />

<h2>📌 Repository Information</h2>
<ul>
  <li><b>Repository name:</b> goit-react-hw-02</li>
  <li><b>Technologies:</b> React, Vite</li>
  <li><b>Deployment:</b> Vercel</li>
</ul>

<p>
The homework submission includes two links:
</p>
<ul>
  <li>GitHub repository with source code</li>
  <li>Live deployed version on Vercel</li>
</ul>

<hr />

<h2>🎯 Project Goal</h2>
<ul>
  <li>Practice React events handling</li>
  <li>Work with component state (<code>useState</code>)</li>
  <li>Implement conditional rendering</li>
  <li>Persist application state using <code>localStorage</code></li>
</ul>

<hr />

<h2>🛠️ Technologies & Concepts Used</h2>
<ul>
  <li><b>React</b> — Component-based UI</li>
  <li><b>Vite</b> — Project setup and build tool</li>
  <li><b>useState</b> — Managing component state</li>
  <li><b>useEffect</b> — Synchronizing state with localStorage</li>
  <li><b>Events</b> — Handling user interactions</li>
  <li><b>Conditional Rendering</b> — Showing UI based on state</li>
  <li><b>CSS Modules</b> — Component-scoped styling</li>
  <li><b>Prettier</b> — Code formatting</li>
</ul>

<hr />

<h2>🖥️ Application Description</h2>

<h3>☕ Sip Happens Café</h3>
<p>
Please leave your feedback about our service by selecting one of the options below.
</p>

<p>
The application collects feedback in three categories:
</p>
<ul>
  <li><b>Good</b></li>
  <li><b>Neutral</b></li>
  <li><b>Bad</b></li>
</ul>

<hr />

<h2>🧩 Component Structure</h2>

<p>
All components are rendered inside the <b>App</b> component.
Each component has its own folder inside <code>src/components</code>.
</p>

<pre>
src/
 └── components/
     ├── Description/
     │   ├── Description.jsx
     │   └── Description.module.css
     ├── Options/
     │   ├── Options.jsx
     │   └── Options.module.css
     ├── Feedback/
     │   ├── Feedback.jsx
     │   └── Feedback.module.css
     └── Notification/
         ├── Notification.jsx
         └── Notification.module.css
</pre>

<hr />

<h2>🪜 Implementation Steps</h2>

<h3>Step 1 — Feedback State</h3>
<ul>
  <li>Create state in <code>App</code> to store feedback counts</li>
  <li>Initialize state with <code>good</code>, <code>neutral</code>, and <code>bad</code> set to 0</li>
</ul>

<h3>Step 2 — Events & State Updates</h3>
<ul>
  <li>Implement <code>updateFeedback(feedbackType)</code></li>
  <li>Pass the function to the <code>Options</code> component</li>
  <li>Update state when buttons are clicked</li>
</ul>

<h3>Step 3 — Conditional Rendering</h3>
<ul>
  <li>Calculate total feedback</li>
  <li>Render <code>Feedback</code> only when feedback exists</li>
  <li>Show <code>Notification</code> if no feedback is given</li>
</ul>

<h3>Step 4 — Reset Button</h3>
<ul>
  <li>Add a Reset button inside <code>Options</code></li>
  <li>Reset feedback state to initial values</li>
  <li>Display Reset button only when feedback exists</li>
</ul>

<h3>Step 5 — Statistics</h3>
<ul>
  <li>Display total feedback count</li>
  <li>Calculate and show positive feedback percentage</li>
</ul>

<h3>Step 6 — State Persistence</h3>
<ul>
  <li>Save feedback state to <code>localStorage</code></li>
  <li>Restore state on page reload</li>
  <li>Initialize state with stored data or default values</li>
</ul>

<hr />

<h2>📌 Final Notes</h2>
<p>
The application works without console errors or warnings.
All components use default exports, clean JavaScript code,
and optional styling with CSS Modules.
</p>

<p>
This homework demonstrates a solid understanding of React events,
component state management, and basic application persistence.
</p>

<p><b>Happy coding! 🚀</b></p>
