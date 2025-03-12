# School Management API

## 📌 Project Overview
The **School Management API** is a RESTful API built with **Node.js, Express, and Prisma ORM** to manage school data efficiently. It allows users to add new schools and retrieve a list of schools sorted by proximity.

## 🚀 Features
- **Add a School**: Store school details (name, address, latitude, longitude) in the database.
- **List Schools**: Retrieve all schools sorted by location.
- **Database Integration**: Uses **Prisma ORM** with **MySQL (Clever Cloud DB)**.
- **RESTful API**: Built with **Express.js** and **Prisma Client**.

## 🏗 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MySQL (Hosted on Clever Cloud)
- **ORM**: Prisma ORM
- **Hosting**: (Mention if deployed)
- **Tools**: Postman (for testing), Prisma Studio (for DB visualization)

---

## ⚙️ Setup Instructions
### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/yourusername/school-management-api.git
 cd school-management-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```env
DATABASE_URL="mysql://username:password@host:port/database"
PORT=5000
```

### 4️⃣ Migrate the Database
Run the following command to apply schema changes:
```sh
npx prisma migrate dev --name init
```

### 5️⃣ Start the Server
```sh
npm start
```
Server runs on: `http://localhost:5000`

---

## 📌 API Endpoints
### ➤ Add a School
**Endpoint:** `POST /api/addSchool`
**Request Body:**
```json
{
  "name": "Springfield High School",
  "address": "742 Evergreen Terrace, Springfield",
  "latitude": 37.7749,
  "longitude": -122.4194
}
```
**Response:**
```json
{
  "message": "School added successfully!"
}
```

### ➤ List Schools
**Endpoint:** `GET /api/listSchools?lat=40.7128&lng=-74.0060`
**Response:**
```json
[
  {
    "id": 1,
    "name": "Springfield High School",
    "address": "742 Evergreen Terrace, Springfield",
    "latitude": 37.7749,
    "longitude": -122.4194
  }
]
```

---

## 🛠 Tools for Testing
### 📌 Postman Collection
A **Postman collection** has been created for testing APIs.
- [Download Postman Collection](#) (Replace with actual link)

### 📌 Prisma Studio (DB Viewer)
To view and manage database records:
```sh
npx prisma studio
```

---

## 📜 Deliverables
- ✅ **Source Code**: Available in GitHub repository.
- ✅ **Live API Endpoints**: Hosted on (Mention if deployed).
- ✅ **Postman Collection**: Shared for testing.

---

## 📞 Contact & Support
For any queries, reach out via:
- **Email**: your.email@example.com
- **GitHub Issues**: [Report an Issue](https://github.com/yourusername/school-management-api/issues)

---



