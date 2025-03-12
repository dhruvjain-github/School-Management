# 🏫 School Management API

A **RESTful API** built with **Node.js, Express, Prisma, and MySQL** for managing school data, including adding and retrieving school information based on location.

🚀 **Live API:** [https://school-management-1-s8go.onrender.com](https://school-management-1-s8go.onrender.com)

---

## 📌 Features
- ✅ Add a new school to the database
- ✅ Retrieve a list of all schools
- ✅ Get nearby schools sorted by distance
- ✅ Find a school by name
- ✅ Secure and scalable using **Prisma ORM** with **MySQL**

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL (via Prisma ORM)
- **ORM:** Prisma
- **Deployment:** Render (MySQL)

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/dhruvjain-github/School-Management.git
cd School-Management
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Setup Environment Variables**
Create a **.env** file in the root directory and add:
```env
PORT=5000
DATABASE_URL="mysql://your-database-user:your-database-password@your-database-host:3306/your-database-name"
```

### **4️⃣ Run Prisma Migrations**
```sh
npx prisma migrate dev --name init
```

### **5️⃣ Start the Server**
```sh
npm start
```
Server will be running at **http://localhost:5000**.

---

## 📡 API Endpoints

### **1️⃣ Add a School**
- **Endpoint:** `POST /api/addSchool`
- **Request Body (JSON):**
```json
{
  "name": "Greenwood High",
  "address": "123 Main St, California",
  "latitude": 37.7749,
  "longitude": -122.4194
}
```
- **Response (Success):**
```json
{
  "message": "School added successfully!"
}
```
- **Response (Error - Duplicate Entry):**
```json
{
  "error": "School already exists."
}
```

#### Example New User:
```json
{
  "name": "Blue Ridge Academy",
  "address": "456 Elm St, New York",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

#### Example Duplicate Entry:
```json
{
  "name": "Greenwood High",
  "address": "123 Main St, California",
  "latitude": 37.7749,
  "longitude": -122.4194
}
```

### **2️⃣ Get All Schools**
- **Endpoint:** `GET /api/listSchools`
- **Response:**
```json
[
  {
    "id": 1,
    "name": "Springfield High",
    "address": "742 Evergreen Terrace, Springfield",
    "latitude": "40.712800",
    "longitude": "-74.006000",
    "distance": 0
  },
  {
    "id": 2,
    "name": "Greenwood High",
    "address": "123 Main St, California",
    "latitude": "37.774900",
    "longitude": "-122.419400",
    "distance": 4129.08616505731
  }
]
```

### **3️⃣ Get Nearby Schools**
- **Endpoint:** `GET /api/listSchools?lat=40.7128&lng=-74.0060`
- **Response:** Sorted list of schools by distance.

---

## 🏗️ Deployment Guide
### **1️⃣ Deploy on Render**
- Create a **MySQL database** on Render
- Copy the database credentials and update the `.env` file
- Deploy your backend using Render
- Run **Prisma migrations** on your live database

---

## 🛠️ Future Improvements
- ✅ Authentication (JWT-based user authentication)
- ✅ Admin panel for managing school data
- ✅ Caching for faster responses

---

## 💡 Contributing
Pull requests are welcome! Please follow proper coding practices and submit PRs with meaningful changes.

---

## 📜 License
This project is licensed under the MIT License.

---

### ⭐ **If you find this project useful, give it a star!** ⭐

