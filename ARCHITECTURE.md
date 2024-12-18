## Architectural design

The application is structured around a clean, modular architecture that leverages React’s Context API for state management and 
TypeScript for robust type safety. We maintain a clear separation of concerns: the TaskContext and FilterContext handle global 
state for tasks and filtering logic, while individual components like TaskList, TaskItem, and TaskAdder focus solely on 
rendering UI and interfacing with the context APIs. This makes the codebase easier to navigate, test, and extend, 
as each piece has a well-defined responsibility.

By using the Context API, we avoid deeply nested prop drilling and ensure that any component requiring global 
state can access it directly. This approach, combined with TypeScript’s strong typing, leads to more reliable code and 
fewer runtime errors. Mocking the context methods and using test doubles for components like TaskForm in our tests 
allows us to isolate and verify each unit in a controlled environment. This strategy ensures that we can quickly 
adapt or improve individual parts without risking unintended side effects elsewhere.


The entire feature set is contained within the *TaskTracker* component directory, reflecting an architectural 
assumption that this module is part of a larger product. In a real-world scenario, multiple such modules could 
live alongside each other, each responsible for its own slice of functionality. We also maintain a shared area 
that centralizes common styling utilities, allowing for consistent look and feel across components without duplicating 
code. This pattern simplifies maintenance and updates since common changes can be made in one place.

While this project doesn’t include reusable form elements or other commonly shared UI components, 
it’s designed with extensibility in mind. In a larger, production-scale application, you could easily 
introduce reusable components—such as custom input fields or complex form controls—either within a 
shared/common folder or as standalone libraries that serve multiple modules in the product. This approach 
ensures that as the product grows and new features emerge, the codebase can scale gracefully, maintaining 
clarity and fostering reusability without impacting the core module structure.
