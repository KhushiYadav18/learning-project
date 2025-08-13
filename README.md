# Learning Platform

A full-stack web application for online learning, featuring user authentication, course content, quizzes, and clickstream analytics.

---

## Tech Stack

*Frontend:*
- React (with Vite)
- React Router DOM
- Axios
- Tailwind CSS
- Framer Motion

*Backend:*
- Django & Django REST Framework
- Simple JWT for authentication
- SQLite for local dev
- CORS Headers, Whitenoise (for static files)
- Gunicorn (for production)

---

## 🌐 Overall Flow

1. *User Authentication:*  
   - Users can register and log in.  
   - JWT tokens are used for secure authentication.  
   - Auth state is stored in localStorage and protected routes are enforced on the frontend.

2. *Main Features:*  
   - *Dashboard:* Personalized user dashboard after login.
   - *Courses & Videos:* Users can browse courses and watch videos.
   - *Quizzes:* Interactive quizzes for learning assessment.
   - *Clickstream Analytics:* User interactions (like form submissions) are logged for analytics.

3. *Frontend-Backend Interaction:*  
   - The frontend communicates with the backend via REST API endpoints (using Axios).
   - Protected endpoints require a valid JWT access token.
   - Clickstream events are sent to the backend for logging.

---

## 🚀 Local Development Setup

### 1. Clone the Repository

bash
git clone https://github.com/Kaushik035/Learning-platform.git
cd Learning-platform


---

### 2. Backend Setup (Django)

bash
cd backend
# Install dependencies (using pipenv or pip)
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create a superuser (optional, for admin access)
python manage.py createsuperuser

# Start the backend server
python manage.py runserver


- The backend will be available at http://localhost:8000/
- API endpoints are prefixed (e.g., /users/login/, /users/register/)

---

### 3. Frontend Setup (React + Vite)

bash
cd ../frontend
npm install
npm run dev


- The frontend will be available at http://localhost:5173/
- Make sure the backend is running for API requests to work.

---

## ⚙ Environment Notes

- The backend CORS settings allow requests from http://localhost:5173.
- JWT tokens are stored in localStorage for authentication.
- You may need to adjust database settings in backend/learning_platform/settings.py for production.

---

## 📁 Project Structure


Learning-platform/
  backend/      # Django backend (API, models, auth, analytics)
  frontend/     # React frontend (UI, routing, API calls)


---