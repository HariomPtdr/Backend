# Backend Learning Journey

This repository documents my day-by-day backend learning progress using **Node.js** and **Express.js**, progressing from basic server setup to MongoDB integration.

---

## 📁 Day1 - Basic Server Setup

**Dependencies:** `express ^5.2.1`

**Files:**
- `app.js` - Basic Express server listening on port 3000
- `package.json`

**Learning:** First server creation, requiring Express, running on port 3000

---

## 📁 Day2 - GET Method & Static Files

**Dependencies:** `express ^5.2.1`, `nodemon ^3.1.14`

**Files:**
- `server.js` - Express server with GET routes (`/` and `/users`)
- `about.html` - Static HTML file
- `package.json`

**Learning:** GET method to retrieve resources, status codes (200), testing with Postman, returning JSON data

---

## 📁 Day3 - POST Method & Middleware

**Dependencies:** `express ^5.2.1`

**Files:**
- `server.js` - Express server with POST and GET endpoints for `/notes`

**Key Concepts:**
```javascript
app.use(express.json())  // Middleware to parse JSON body
const notes = []  // In-memory storage
```

**Learning:** POST method (creates resources), `express.json()` middleware for `req.body`, request/response handling

---

## 📁 Day4 - DELETE, PATCH & Scripts

**Dependencies:** `express ^5.2.1`

**Files:**
- `server.js` - Entry point
- `src/app.js` - Main application with full CRUD operations
- `package.json`

**Scripts:** `"dev": "npx nodemon server.js"`

**Features:**
- POST `/notes` - Create (201)
- GET `/notes` - Read (200)
- DELETE `/notes/:index` - Delete (204)
- PATCH `/notes/:index` - Update (200)

**Learning:** DELETE and PATCH methods, URL params (`req.params`), status codes, module.exports, npm scripts

---

## 📁 Day5 - Status Codes & MongoDB Setup

**Dependencies:** `express ^5.2.1`

**Files:**
- `server.js` - Entry point
- `src/app.js` - Same CRUD operations as Day4

**Learning:** HTTP status codes in detail, MongoDB Atlas setup, MongoDB Compass setup, database creation

---

## 📁 Day6 - MongoDB Connection & Environment Variables

**Dependencies:** `express ^5.2.1`, `mongoose ^9.3.3`

**Files:**
- `server.js` - Server with MongoDB connection
- `src/app.js` - Basic Express app export
- `.env` - Contains MongoDB URI (not committed)
- `package.json`

**Scripts:** `"dev": "npx nodemon server.js"`

**Learning:** Connecting to MongoDB cluster, `.env` files for hiding sensitive data, `dotenv` package, Mongoose connection

---

## 📁 Day7 - MongoDB Models & Database Operations

**Dependencies:** `express ^5.2.1`, `mongoose ^9.3.3`

**Files:**
- `server.js` - Server with database connection
- `src/app.js` - Routes with async Mongoose operations
- `src/config/database.js` - Database connection logic
- `src/Models/notes.model.js` - Mongoose schema/model
- `.env` - MongoDB URI (not committed)
- `package.json`

**Project Structure:**
```
Day7/
├── server.js
├── .env
├── package.json
└── src/
    ├── app.js
    ├── config/
    │   └── database.js
    └── Models/
        └── notes.model.js
```

**Schema (notes.model.js):**
```javascript
{
  title: String,
  description: String
}
```

**Features:**
- POST `/notes` - Creates notes in MongoDB
- GET `/notes` - Fetches all notes from MongoDB
- Uses async/await for database operations

**Learning:** Mongoose models, database schemas, organized project structure (config/, Models/), storing data persistently

---

## 📁 postman/ & .postman/

**Purpose:** Postman API testing collections and configurations
- Contains mocks, globals, specs, environments, collections, flows

---

## Progress Summary

| Day | Topic |
|-----|-------|
| Day 1 | Basic Express server |
| Day 2 | GET method, JSON responses |
| Day 3 | POST method, middleware |
| Day 4 | DELETE, PATCH, URL params, scripts |
| Day 5 | Status codes, MongoDB setup |
| Day 6 | MongoDB connection, environment variables |
| Day 7 | Mongoose models, persistent storage |

---

## How to Run

Each day's folder can be run independently:

```bash
cd DayX
npm install
npm run dev    # Days 4-7 (uses nodemon)
# OR
node server.js # Days 1-3
```

---

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **Postman** - API testing

---

## Author

Hariom
