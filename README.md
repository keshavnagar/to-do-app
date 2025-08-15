So this is the to do app where I documented all my code: 
1. create to-do-app react project
2. make app.jsx
3. in which i created some things
4. created form 
5. in form i created the very first thing that is input field 
6. to implement input field i create a state called todo that contain the value of in input value
7. than i created a submit button 
8. apply handleclick function to prevent auto submit and also make states to store the each item in todos array state
9. apply map method to better display of things into screen
10. make a saparate component for map method and give the id with props
11. apply inline css
12. apply css style sheet within the css folder in a src folder and make a css file
13. we implement the css style sheet succesfully
14. now i understood the concept of global css and css modules : 
Got it — I’ll write this in **your way**, short but crystal clear, so when you look back months later, it’ll instantly make sense without you re-learning everything.

---

## 📄 React Styling – My Notes

### **3 Ways to Style in React**

1. **Inline CSS** →

   * Styles directly in JSX:

     ```jsx
     <h1 style={{ color: "red" }}>Hello</h1>
     ```
   * Good for very small changes, but makes file messy for big designs.

2. **Global CSS** →

   * Create `style.css` and import it:

     ```jsx
     import './style.css';
     ```
   * Styles apply **everywhere** in the project.
   * **Problem:** If two components use the same class name, styles will overwrite each other.

3. **CSS Modules** →

   * Create `ComponentName.module.css` and import as:

     ```jsx
     import styles from './ComponentName.module.css';
     <h1 className={styles.header}>Hello</h1>
     ```
   * Styles are **scoped to that component only**.
   * Even if two components have `.header`, their styles stay separate.

---

### **Why Global CSS is risky in big projects**

* Example:

  * Dev A makes `.header` for Login page → red text
  * Dev B makes `.header` for Profile page → blue text
  * In **Global CSS**, last definition wins → both become blue.
  * In **CSS Modules**, React changes names internally (like `.header_xyz`) so no clash.

---

### **Why CSS Modules are better in production**

* No need to invent unique class names for every file.
* Safe from accidental overwriting when multiple developers work on same project.
* You can reuse same simple names like `.header`, `.title` in every file without issues.

---

💡 **Shortcut memory:**
Global CSS = Everyone writing in same notebook → overwrite risk.
CSS Modules = Everyone gets their own notebook → no clash.

---

Keshav, I can also make you a **tiny diagram version** of this note so it’s more visual inside your `README.md`.
Do you want me to include that too?
