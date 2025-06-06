# NetConstruct React Developer Assessment

## Overview

The purpose of this assessment is to demonstrate:

1. An understanding of React syntax
2. Working with an API
3. Storing and manipulating React state
4. Structuring an application with multiple components
5. HTML and CSS ability
6. Responsive web development ability

### Prerequisites

In order to run the provided solution the following software will need to be installed:

- NodeJS (LTS) [here.](https://nodejs.org/en/)
- A code editor (We recommend VS Code [here.](https://code.visualstudio.com/))

### Setup

1. Fork and clone the repository or download and extract the ZIP file [here.](https://github.com/netconstruct/react-developer-assessment/archive/master.zip)
2. Open the repository folder and install the dependencies using `yarn` or `npm install`.
3. Run the development server using `yarn dev` or `npm dev`.

The repository contains a `App.tsx` file inside the `components` folder; this should be the starting point for your exercise. Please feel free to create more components to structure your app in a logical manner.

The repository also contains an API endpoint mocked using MirageJS. This can be accessed when running the development server at the URL `/api/posts`.

We would love to see code comments to help explain your approach and thought process, this will also be discussed in a follow-up technical interview.

Finally, the use of third party libraries and/or components is permitted - and in some cases encouraged. However, please ensure that you are still demonstrating the skills we have outlined above.

**Note: The only exception is the use of UI Component libraries (e.g. Material UI, etc) as these reduce our ability to review your styling ability.**

### Requirements

These are the minimum requirements for the exercies:

1. Retrieve the data from the mock API.
1. Output the data in a list, including properties from the data that are appropriate for a list view.
1. Implement a category filter - this can be single or multi-select.
1. Use semantic markup where possible.
1. Create a responsive layout with HTML and CSS, **this must be suitable for use on a public-facing website**. For example, a grid-based card layout.

### Additional Exercises

If you have time then demonstrating any of the following would be considered as a bonus:

1. Implement pagination - this can be traditional numbered pages or "load more".
1. Persist filter state in the query string.
1. Include animated transitions between application state, e.g. when filtering.
1. Use styled components instead of plain CSS.
1. Use client-side routing to create a "detail" page. This page only needs to include the title and author name.

## Submission

Please submit your completed exercise either by supplying the URL of your forked repository or by including a ZIP archive of your local folder - please ensure you **do not** include the `node_modules` folder.

### 🚀 Tech Stack

- Vite + React + TypeScript
- MirageJS for API mocking
- Styled Components

### 🧠 Developer Notes

This application was migrated from Create React App to Vite to improve development startup and hot reload times, and to adopt a more modern and flexible toolchain.

### 📚 Resources

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [MirageJS](https://miragejs.com/)
