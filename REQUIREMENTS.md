## Objective

Build a minimalistic task tracker application using the latest version of React, TypeScript and the Context API. This application
should display a list of tasks and provide the functionality to filter tasks by priority.

## Requirements

### Task List:
1. Display a list of tasks, each with a title, description, and priority (e.g., Low, Medium, High).
2. Allow tasks to be added, edited, and deleted. 
### Priority Filter:
1Include a dropdown to filter tasks by priority.
2. Filtering should occur on the client side and update in real-time as the dropdown selection changes.

### Context API:
1. Use the Context API to manage the global state for the list of tasks and the priority filter selection.
2. Separate contexts can be created for tasks and filters or use a single context to manage all states.

### Data Persistence:
1. Save the task list in the browser's localStorage to persist data between refreshes.
2. Load tasks from localStorage on application startup.

### Tests:
1. Write unit tests for task components and priority filter
2. Git commits:
  - Keep git commits small and focussed on single tasks, merging regularly

### Requirements for Code Structure and Styling
1. Use functional components and hooks (e.g., useContext , useState , useEffect ).
2. Write clean, modular code that’s easy to extend and test.
3. Provide meaningful component separation, so the code is easy to navigate.
4. Use CSS (or styled-components) to add some tasteful styling, make the interface clean and inviting.
