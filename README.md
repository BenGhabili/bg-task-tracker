# Task tracker App

This project is a simple task tracker application built with React and Typescript.

### Requirements
For detailed project requirements, please refer to [REQUIREMENTS.md](./REQUIREMENTS.md).

### Architectural decision and considerations

This application uses **feature-based (or modular)** architecture. In software engineering, feature-based architecture
organises code and components according to specific features or business domains, rather than by technical layers alone.
For detailed architecture and structural consideration, please refer to [ARCHITECTURE.md](./ARCHITECTURE.md).

## Getting Started

### Prerequisites

- **Node.js** (v20 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/BenGhabili/bg-task-tracker
   cd bg-task-tracker
```

2. Install dependencies:

```bash
   yarn install
```

*Important:* Application expects a node version of 20 or higher to run. To install node:

use https://nodejs.org/en/download/package-manager

If you are using nvm as a node package manager:

```bash
   nvm use
```
This will set the node version to 20.11.0 for this project. If you don't have this version, simply use:
```BASH
   nvm install 20.11.0
```

### Running application:

```bash
   yarn start
```

Open your browser and navigate to:

```bash
   http://localhost:5173/
```

### Testing the application

The application uses Jest and React testing library to test layout and functionalities.

```bash
   yarn run test
```

If you want to run the test in watch mode:

```bash
   yarn run test:watch
```

### Further development

If I had more time, I would add:

1. **More Comprehensive Testing**: Increase test coverage.
2. **Further UI Improvements**: Enhance the user experience with additional styling and responsive design adjustments and accessibility.
3. **Simple Task Search**: To improve the user experience
4. **Drag and Drop**: To improve user experience
