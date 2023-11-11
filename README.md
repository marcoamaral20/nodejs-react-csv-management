# CSV Data Web Application

This is a full-stack web application that allows users to load a CSV file, display the data as cards on the website, and search through the loaded CSV data. The application consists of both a frontend and a backend component.

## Accessing the Deployed Application

The frontend of this application has been deployed in https://vercel.com/ and is accessible at the following URL:

[Shaw and Partners Test Frontend](https://shawandpartners-test-frontend.vercel.app/)

---

The backend of this application has been deployed in https://render.com/ and is accessible at the following URL:

[Shaw and Partners Test Backend](https://shawandparterns-backend.onrender.com/)

Please visit the provided link to interact with the deployed application.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [API Endpoints](#api-endpoints)
- [CSV Data Structure](#csv-data-structure)
- [Evaluation Criteria](#evaluation-criteria)

## Features

### Frontend
- Single-Page Application (SPA) using React.
- File upload button to select and upload a CSV file.
- Search bar to filter displayed cards based on user input.
- Responsive design for both desktop and mobile devices.
- User-friendly error handling.

### Backend
- RESTful API using Node.js.
- Endpoint to upload a CSV file.
- Endpoint to search through the loaded CSV data.
- Endpoint to clear data.

## Project Structure
```
├── backend
│ ├── src
│ │ ├── interface
│ │ ├── router
│ │ ├── service
│ │ ├── tests
| | └── server.ts
| ├── .gitignore
│ └── package.json
├── frontend
│ ├── src
│ │ ├── components
| | |  ├── style
| | |  └── test
│ │ ├── App.tsx
| | └── index.tsx
│ └── package.json
|_________________
```


## Setup

1. Clone this repository.
2. Navigate to the `backend` and `frontend` directories separately.
3. Run `npm install` in each directory to install dependencies.

## Running the Application

1. Start the backend server:
    ```bash
    cd backend
    npm run dev
    ```

2. Start the frontend application:
    ```bash
    cd frontend
    npm run dev
    ```

The frontend will be accessible at `http://localhost:4000/`.

## Running Tests

- Run tests for the backend:
    ```bash
    cd backend
    npm test
    ```

- Run tests for the frontend:
    ```bash
    cd frontend
    npm test
    ```

## API Endpoints

### `POST /api/files`
- Upload a CSV file.
- Request Body: Use the key "file" for file upload.

### `GET /api/users`
- Search through the loaded CSV data.
- Query Parameter: `q` for search terms.

### `DELETE /api/clear`
- Clear the data if exists.

## CSV Data Structure

The CSV file should follow this structure:

```
name,city,country,favorite_sport
John Doe,New York,USA,Basketball
Jane Smith,London,UK,Football
Mike Johnson,Paris,France,Tennis
Karen Lee,Tokyo,Japan,Swimming
Tom Brown,Sydney,Australia,Running
Emma Wilson,Berlin,Germany,Basketball
```


## Evaluation Criteria

Your solution will be evaluated based on:
- Completion of all required features and functionality.
- Quality and organization of code.
- Quality and coverage of automated tests.
- User-friendliness and responsiveness of the frontend.
- Performance and efficiency of the backend.
- Understanding and adherence to the provided instructions.

