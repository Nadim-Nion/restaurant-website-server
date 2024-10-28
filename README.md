# **Chicken Crisper Combos - Server Side**
### A Restaurant Website

## Overview

This server provides the backend functionalities for **Chicken Crisper Combos**, a restaurant web application. It includes APIs to manage menu items and cart operations, supporting a seamless user experience for adding, updating, and removing items in the cart.

## Key Features

1. **Add to Cart:** Allows users to add menu items to their cart.
2. **Unique Cart Items:** If an item is already in the cart, it shows "Already Exists" instead of "Add To Cart."
3. **Sweet Alert Notifications:** Alerts are triggered for cart additions and deletions.
4. **Cart Summary:** The total number of items in the cart is displayed in the header.
5. **Sidebar Cart:** A drawer opens upon adding an item, showing cart contents.
6. **Quantity Adjustment:** Users can update item quantities, with prices adjusted dynamically.
7. **Cart Deletion:** Users can delete items from the cart with confirmation alerts.

## Technologies Used

- **Front-end:** React.js, React Router, Tailwind CSS, Daisy UI
- **Data Fetching:** TanStack Query, Axios JS
- **State Management:** Context API
- **Back-end:** Express.js, MongoDB
- **Tools:** Netlify (Frontend), Vercel (Backend)

---
## API

Vercel: https://restaurant-website-server-five.vercel.app/

---
## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nadim-Nion/chicken-crisper-combos-server.git
   cd chicken-crisper-combos-server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Create a `.env` file in the root directory with the following variables:
     ```plaintext
     MONGODB_URI=your_mongodb_connection_string
     PORT=5000
     ```

4. **Run the Server:**
   ```bash
   npm start
   ```
   The server should now be running on `http://localhost:5000`.

   ---
    
## API Endpoints

### Menu Collection API

1. **GET `/menuItems`** - Retrieve all menu items.

### Cart Collection API

1. **GET `/cartItems`** - Retrieve all items currently in the cart.
   
2. **POST `/cartItems`** - Add a new item to the cart.

3. **PATCH `/cartItems/:id`** - Update the quantity of a specific cart item by its ID.

4. **DELETE `/cartItems/:id`** - Delete a specific item from the cart by its ID.

---
## Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community) or a cloud MongoDB URI (e.g., MongoDB Atlas)

---
## Usage

- **Add Items to Cart:** When a user clicks "Add to Cart," the item is added to the cart collection in MongoDB, updating the total items and enabling cart management features.

- **Quantity Adjustment:** Users can adjust quantities, with prices recalculated based on changes.

- **Cart Deletion:** Users can delete items from their cart, with a confirmation alert to prevent accidental deletion.

---
## Deployment

The server is deployed using **Vercel**, while the frontend is hosted on **Netlify**. To deploy to Vercel:

1. Sign up or log in to [Vercel](https://vercel.com/).
2. Import the GitHub repository to Vercel.
3. Set up environment variables in Vercel for `MONGODB_URI` and `PORT`.
4. Deploy and obtain a live server link.

---


## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for bug fixes or feature requests.

---


## Tech Stack

**Client:** React+Vite, React Router, Tailwind CSS, Daisy UI, Axios JS, TanStack Query

**Server:** Express.js, Node.js

**Database:** MongoDB

**Tools:** Vite, Vercel, npm, Netlify

**State Management:** Context API

---
## FAQ

#### Is this website reponsible?
Answer : Yes, the full website is responsive for the all devices (Desktop, Tablet and Phone)

#### Is this website store data to the database?
Answer : I have stored all the data in MongoDB.

---

## 🚀 About Me
Hi, I am Nadim Mahmud Nion. I have recently concluded my graduation from the department of Computer Science and Engineering (CSE) at the Daffodil International University (DIU). I have been learning MERN Stack Web Development since 2022. I am expertise in the following skills:

* React

* Express.js

* Node.js

* MongoDB

* JWT

* Stripe

* TanStack Query

* Axios JS

* Vite

* React Router

* Firebase (Authentication & Hosting)

* Vercel

* JavaScript

* Advanced JavaScript

* Daisy UI

* Bootstrap

* Tailwind

* HTML5

* CSS3

* Media Query

I have built multiple projects using these skills. You are invited to my GitHub profile to know about my projects and don't forget to give a star to my projects.
