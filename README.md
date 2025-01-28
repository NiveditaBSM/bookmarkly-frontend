# Bookmarkly - Web Application for Managing Favorite Links

Bookmarkly is a full-stack web application designed to help users save, manage, and organize their favorite links efficiently. Whether it's articles, blogs, or any other resources, users can add them to their collection, categorize them with tags, and quickly retrieve them later using search and filter functionalities.

## Features

### **Core Features**

- **Add and Delete Bookmarks:**

  - Users can create bookmarks with a title, description, and tags.
  - Delete bookmarks when they are no longer needed.

- **Search and Filter:**

  - Quickly find saved links using the search bar.
  - Filter bookmarks based on tags.

- **State Management with Redux:**

  - Efficient state management using **Redux Toolkit (RTK)**.
  - Handles asynchronous operations like fetching, adding, and deleting bookmarks with Redux middleware.

- **Interactive Interface:**
  - A clean, intuitive UI for a smooth user experience.

## Tech Stack

### **Frontend**

- **React.js:** Used for building reusable UI components and managing the application logic.
- **Redux Toolkit:** For efficient and simplified state management.
- **HTML5 & CSS3:** For the structure and styling of the application.
- **JavaScript (ES6+):** To handle application logic.

### **Build Tools**

- **Vite:** For fast and optimized development and build processes.

### **Deployment**

- **Vercel**: To host the frontend application.

## Getting Started

Follow these steps to set up the project locally:

### **Prerequisites**

- Node.js (v14 or later)
- npm (v6 or later) or yarn

### **Installation**

1. Clone the repository:
   (using ssh way)

   ```bash
   git clone git@github.com:NiveditaBSM/bookmarkly-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bookmarkly-frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Add environment variables
   create a .env file with following environment variables
   ```bash
   VITE_BACKEND_URL=<link_to_backend>
   ```

### **Run the Application Locally**

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Folder Structure

The basic folder structure looks as follows:

```
bookmarkly-frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   ├── hooks/           # Reusable custom hooks
│   ├── redux/           # Redux slices and store setup
│   ├── services/        # Services/utility functions to call the the backend APIs
│   ├── App.jsx          # Entry point of the react application
│   ├── index.css        # Global styling and entry point for tailwind css styling
│   └── main.jsx         # Main application component
├── .gitignore
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Live Application

Check out the live application here: [Deployed Link](https://bookmarkly-frontend.vercel.app)

## Contributions

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.

## Contact

If you have any questions or suggestions, feel free to reach out:

- Email: <niveditamagdum2015@gmail.com>
- GitHub: [My GitHub Profile](https://github.com/NiveditaBSM)
