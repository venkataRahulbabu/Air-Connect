# Air-Connect ✈️
Shortest Flight Journey using Dijkstra's algorithm
  
A flight route planning web application with user registration and login functionality. The platform helps users find the most efficient flight routes based on **Cost vs. Time Optimization** using Dijkstra's algorithm. Users can prioritize either **cost** or **time** to get personalized flight suggestions, along with a sleek animated route visualization.

---

## Features 🚀  
- **User Registration & Login**:  
  Users can register using their **email, username, and password**.  
- **Flight Route Planner**:  
  Users can choose between **Cost Optimization** or **Time Optimization** to get the most efficient flight route.
- **Graph Visualization**:  
  Dynamic graph visualization of flight routes based on source and destination inputs.
- **Responsive Design**:  
  The website is fully responsive and works well on both desktop and mobile devices.

---

## How It Works ⚙️  
1. **User Registration & Login**:  
   - A new user registers by entering their **email, username, and password**.
   - Upon successful login, users can access the route planning page.

2. **Flight Route Planner**:  
   - Users select their preferred **optimization mode**:  
     - **Cost**: Displays the cheapest flights available.
     - **Time**: Displays the fastest flights between source and destination.
   - Users enter the **source** and **destination** cities using a form.

3. **Route Calculation**:  
   - The backend uses **Dijkstra's Algorithm** to compute the shortest/cheapest path.
   - Results are fetched from the backend using the API endpoint.

4. **Graph Visualization**:  
   - After submitting the route form, an animated graph is displayed showing the optimized flight route.

---

## Tech Stack 🛠️  
### Frontend:  
- **HTML, CSS, Javascript**: For building the interactive user interface.  
- **Tailwind CSS**: For styling and layout with a modern, responsive design.  

### Backend:  
- **Node.js** with **Express.js**: For building the server-side API.  
- **MongoDB**: For user authentication and storing flight data.

### Algorithm:  
- **Dijkstra's Algorithm**: To find the shortest or cheapest flight routes.

---
