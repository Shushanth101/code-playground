# Code Playground

A modern, web-based code editor and execution environment built with React and Vite. This application allows users to write and run code in multiple languages directly from their browser using the Piston API.

## Features

-   **Multi-language Support**: Write and execute code in:
    -   JavaScript (Node.js)
    -   Python
    -   Java
    -   C
    -   C++
-   **Smart Editor**: Powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/) (the code editor that powers VS Code), featuring syntax highlighting and code suggestions.
-   **Real-time Execution**: Execute code instantly and view output in a dedicated panel.
-   **Clean UI**: Modern, responsive interface with split-pane layout for coding and output.

## Tech Stack

-   **Frontend Framework**: React 19
-   **Build Tool**: Vite
-   **Editor**: `@monaco-editor/react`
-   **Execution Engine**: [Piston API](https://emkc.org/)
-   **Styling**: Vanilla CSS / React Icons

## Getting Started

### Prerequisites

-   Node.js (latest version recommended)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd codeplayground
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Usage

1.  Select a language from the dropdown menu in the top bar.
2.  Write your code in the editor on the left.
3.  Click the "Run" button to execute your code.
4.  View the output (stdout/stderr) in the right panel.

## Project Structure

-   `src/App.jsx`: Main application component handling state and layout.
-   `src/components/`: Reusable UI components (LeftPanel, RightPanel).
-   `src/constants.js`: Language definitions and default code snippets.
