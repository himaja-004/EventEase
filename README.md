# EventEase

EventEase is a modern, responsive web application built with **React**, **Tailwind CSS**, and **Vite** that allows users to create, browse, and book tickets for events. It also includes an organizer dashboard to manage your own events.

---

## 🚀 Features

- 🌐 **Homepage** with a grid of upcoming events
- 🔍 **Search & filter** events by name and location
- 📝 **Create Event** form (stored in localStorage)
- 🎟 **Book Tickets** with attendee info form
- 📋 **Organizer Dashboard** to view and delete your own events
- 🖼 Attractive UI with responsive design
- ⚡ Powered by **React Router**, **Framer Motion**, and **Tailwind CSS**

---

## 📁 Project Structure

src/

├── components/ # Reusable UI components (Navbar, EventCard)

├── pages/ # Page components (Home, CreateEvent, BookTicket, etc.)

├── App.jsx # Routes and layout

├── main.jsx # React entry point

├── index.css # Tailwind base styles


---

## 🛠 Tech Stack

- **React.js**
- **Vite** for blazing-fast dev server
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations
- **React Router DOM** for navigation
- **localStorage** for persistent event data

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/EventEase.git

# Navigate into the project directory
cd EventEase

# Install dependencies
npm install

# Run the app locally
npm run dev
```
---

## 🔍  Folder Overview
EventCard.jsx – Displays individual event info

Navbar.jsx – Top navigation bar with search and location selector

Home.jsx – Lists mock upcoming events

CreateEvent.jsx – Form to create and store new events

EventDetails.jsx – Detailed view of a single event

BookTicket.jsx – Ticket booking form

OrganizerDashboard.jsx – Manage created events (view/delete)

---

## 📝 Notes
All event and ticket data is saved in localStorage (no backend).

Mock data is used for events until new ones are created.

Booking and creation forms are fully functional, validated, and styled.

---

## 🤝 Acknowledgements
React

Tailwind CSS

Framer Motion

React Router
