🎥 MovieAPI
MovieAPI is a full-stack web application that allows users to browse movies, watch trailers, add reviews, and like their favorite movies. The backend is powered by Spring Boot and MongoDB, while the frontend is built with React and styled with Material-UI and Bootstrap.

📚 Table of Contents
Features
Technologies Used
Getting Started
API Endpoints
Frontend
Screenshots
Contributing
License
🚀 Features
User Authentication: Secure login and registration using JWT-based authentication.
Browse Movies: Display a carousel of movies with backdrops, posters, and trailers.
Like Movies: Allow users to like movies and persist their likes.
Reviews: Add, view, and manage reviews for each movie.
Responsive Design: Fully responsive frontend using Material-UI and Bootstrap.
RESTful API: Backend provides clean and structured RESTful endpoints.
🛠️ Technologies Used
Backend:
Spring Boot: Backend framework.
MongoDB: NoSQL database for storing movies, reviews, and user data.
JWT: Secure authentication mechanism.
Spring Security: Handles authentication and authorization.
Frontend:
React: UI framework.
React-Bootstrap: Styling and layout.
Material-UI: Modern design components.
Axios: API requests.
🏁 Getting Started
Prerequisites
Java 17 or higher
Node.js & npm
MongoDB installed locally or a MongoDB Atlas account
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/MovieAPI.git
cd MovieAPI
Navigate to the backend directory:

bash
Copy code
cd _backend
Install dependencies (if needed via Maven):

bash
Copy code
mvn install
Configure your MongoDB connection:

Update the application.properties file under src/main/resources.
Run the Spring Boot application:

bash
Copy code
mvn spring-boot:run
The API will run at http://localhost:8080.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd _frontend/cineflix-v1
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The frontend will run at http://localhost:3000.

📋 API Endpoints
Authentication
POST /api/v1/auth/register: Register a new user.
POST /api/v1/auth/login: Authenticate and retrieve a JWT.
Movies
GET /api/v1/movies: Fetch all movies.
GET /api/v1/movies/{id}: Fetch details of a single movie.
Reviews
POST /api/v1/reviews: Add a review (requires authentication).
GET /api/v1/reviews/{movieId}: Fetch reviews for a movie.
🎨 Frontend Features
Homepage: Displays a carousel with movie details.
Login/Register: User authentication pages.
Movie Details: View trailers, reviews, and the option to like movies.
Responsive Design: Optimized for mobile and desktop.

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Commit your changes:
bash
Copy code
git commit -m "Add feature-name"
Push the branch:
bash
Copy code
git push origin feature-name
Open a pull request.
📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

💡 Acknowledgements
Spring Boot Documentation
React Documentation
MongoDB Documentation
Let me know if you need further customizations! 🚀
