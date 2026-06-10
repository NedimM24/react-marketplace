# React Marketplace

## https://react-marketplace-pi.vercel.app/

A simple e-commerce web application built with React. It includes product browsing, a shopping cart system, and routing. The project is component-based and styled using CSS Modules.

---

## Features

- Product listing page with reusable product cards
- Shopping cart with quantity management
- Add/remove/update items in cart
- Persistent cart state via React state management
- Client-side routing using React Router
- Responsive layout for different screen sizes
- Unit testing with Vitest and React Testing Library

---

## Tech Stack

- React
- React Router
- CSS Modules
- Vitest
- React Testing Library

---

## Pages

### Home
Landing page with a simple introduction and store image.

### Shop
Displays all products and allows users to add items to the cart.

### Cart
Shows all added items, allows quantity updates, and displays the total price.

---

## State Management

Cart state is managed in React using useState and shared between routes using React Router context, allowing dynamic updates across the application.

Each cart item stores:
- Product data
- Quantity

---

## Testing

The project includes unit tests for major components:

- Navbar tests (rendering and navigation links)
- Home page content rendering
- Shop page rendering product cards

Tests are written using:
- Vitest
- React Testing Library

---

## Getting Started

### Install dependencies

npm install

### Run development server

npm run dev

## Future Improvements

- Backend integration (database for products and cart persistence)
- Authentication system
- Checkout functionality
- Improved form validation
- Global state management (Redux or Context API refactor)

---

## What I Learned

- Using React Router for navigation
- Handling basic cart logic (add, update, remove items)

---

## Roadblocks & Challenges

- Managing cart state without duplicating items
- Keeping quantity updates consistent across components
- Handling controlled input values for quantities