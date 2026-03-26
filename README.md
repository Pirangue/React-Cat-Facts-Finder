# 🐱 Tudo Sobre Gatos! (React)

A fun and interactive web application that displays random cat images and interesting facts about cats, built with React.

## Features

- **Random Cat Images** — Fetch and display a new random cat image with each click
- **Cat Facts** — Load interesting and educational facts about cats from an API
- **Interactive Buttons** — Refresh both images and facts on demand
- **Error Handling** — Gracefully handles API errors with user-friendly messages
- **Auto-Load** — Displays a cat fact automatically when the page loads

## How It Works

### Cat Images
- Uses the **CataaS API** to fetch random cat images
- The "Novo Gato 🐱" button generates a new image each time it's clicked
- Images are cached-busted using the current timestamp to ensure fresh images

### Cat Facts
- Uses the **MeowFacts API** to retrieve random cat facts
- The "Nova Curiosidade 📚" button fetches and displays a new fact
- A fact is automatically loaded when the page first opens

## Technologies Used

- **React** — Component-based UI framework
- **Vite** — Fast build tool and dev server
- **CSS** — Styling
- **JavaScript (ES6+)** — Async/await for API calls

## API Endpoints

- **Cat Images:** `https://cataas.com/cat`
- **Cat Facts:** `https://meowfacts.herokuapp.com/`

## Error Handling

If an API call fails, the app displays an error message and logs the error to the browser console.

## Setup - React + Vite

This project is built with React and Vite. For more information about the setup, see the [Vite React documentation](https://vitejs.dev/).

---

**Enjoy learning fun facts about cats! 📚🐱**
