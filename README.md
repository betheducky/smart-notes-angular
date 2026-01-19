## SmartNotesAngular

### 📌 Overview

This project is a lightweight notes application built with **Angular standalone components**. The focus of the app is not visual polish, but **clean architecture, component separation, and state management** using Angular best practices.

The app demonstrates how to structure a medium-complexity frontend feature with clear ownership of data, predictable UI behavior, and maintainable code.

---

### ✨ Features

- Create, edit, archive, and delete notes
- Toggle between **Active**, **Archived**, and **All** notes
- Inline note editing with dirty-state detection
- Centralized state management via a service
- Responsive layout with reusable SCSS breakpoints
- Fully componentized UI (list vs editor separation)

---

### 🧠 Architectural Decisions

This project intentionally emphasizes **code organization and data flow** over UI complexity.

Key design choices:

- **Smart page / dumb components pattern**
    - `NotesPageComponent` owns application state and orchestration
    - `NotesListComponent` handles list display and UI interactions
    - `NotesEditorComponent` manages form state and editing logic
- **Unidirectional data flow**
    - Data flows down via `@Input`
    - User actions flow up via `@Output` events
- **Service-driven state**
    - All note data and mutations are centralized in a `NoteService`
    - Components remain stateless and predictable
- **Standalone components**
    - No `NgModule` usage
    - Modern Angular setup aligned with current best practices
- **Local device storage for simple data persistence**
    - Keeps sthe app fully client-side
    - Allows accessible demonstration of core app function
    - Employs effective compartmentalization of UI concerns vs data handling

---

### 🛠️ Tech Stack

- **Angular** (standalone components)
- **TypeScript**
- **Reactive Forms**
- **SCSS**
    - Shared breakpoint mixins
    - Component-scoped styles
- No external UI libraries (intentional)

---

### 🎯 Why This Project Exists

This app was built to:

- Demonstrate **Angular component architecture**
- Show thoughtful **state ownership and data flow**
- Highlight **TypeScript usage and separation of concerns**
- Serve as a clean, understandable example for recruiters and reviewers

Visual design was intentionally kept minimal to prioritize readability and architectural clarity.

---

### Future Enhancements

- Add authentication
- Improve visual design with a component library
- Introduce animations or drag-and-drop ordering
