# User Dashboard

A simple React app that shows a list of users and lets you search them.

Data comes from [dummyjson.com/users](https://dummyjson.com/users).

## Features

- Loads users once when the page opens
- Shows name, email, username and company
- Search by name, email or username
- Results update as you type, with no extra API calls
- Loading, error and "no results" states
- Light and dark mode

## Tech

React, TypeScript, Vite

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Project structure

```
src/dashboard/
├── Dashboard.tsx   fetches users once
├── UserList.tsx    holds the search text and filters users
├── UserSearch.tsx  search input
├── UserTable.tsx   shows users in a table
├── type.ts         TypeScript types
└── utils.ts        helper functions
```
