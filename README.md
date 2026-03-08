# 🎵 Mood Detection Music Recommendation System

A full-stack web application that detects a user's mood using **facial expression recognition** and recommends songs based on the detected mood. The system uses **Google MediaPipe** to analyze facial landmarks in real time through the user's webcam.

The project also includes **user authentication** and **database storage** to manage users and store application data.

---

## 🚀 Features

- 🎥 Real-time **Face Detection using Webcam**
- 🧠 **Mood Detection using Google MediaPipe**
- 🎵 **Music Recommendation based on detected mood**
- 🔐 **User Authentication System (Register & Login)**
- 💾 **Database Storage using MongoDB**
- 🌐 **Full Stack Application (Frontend + Backend)**
- ⚡ Fast and responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### AI / Computer Vision
- Google MediaPipe (Face Mesh / Face Detection)

### Authentication
- JWT (JSON Web Token)
- bcryptjs (Password Hashing)

---

## 📂 Project Structure

```
mood-detection-music-app
│
├── frontend
│   │
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.js
│   │
│   └── package.json
│
├── backend
│   │
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── config
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/mood-detection-music-app.git
cd mood-detection-music-app
```

---

### 2️⃣ Setup Backend

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

Open a new terminal and navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm start
```

---

## 🎯 How the System Works

1. User opens the application.
2. User registers or logs into the system.
3. The application activates the **webcam**.
4. **Google MediaPipe** detects facial landmarks.
5. Facial expressions are analyzed to determine the **user's mood**.
6. Based on the detected mood, the system **recommends songs**.

Example:

| Mood | Recommended Music |
|-----|-----|
| 😊 Happy | Energetic / Upbeat Songs |
| 😔 Sad | Calm / Emotional Songs |
| 😐 Neutral | Relaxing / Chill Music |

---

## 📸 Future Improvements

- 🎧 Integration with **Spotify API**
- 🎬 Integration with **YouTube Music API**
- 📊 Mood history tracking
- 🤖 Advanced **Machine Learning mood prediction**
- 📱 Mobile responsive design
- 🌙 Dark mode support

---

## 🧪 Possible Use Cases

- Personal mood-based music recommendation
- Mental wellness applications
- Smart entertainment systems
- AI-based emotion recognition projects

---

## 👨‍💻 Author

**Legend**

---

## ⭐ Support

If you like this project, please **give it a star on GitHub** ⭐

It helps others discover the project.
