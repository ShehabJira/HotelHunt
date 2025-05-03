# HotelHunt

HotelHunt is a React-based web application designed to help users search for hotels efficiently. It features a responsive user interface built with Vite and styled using Tailwind CSS. The application allows users to filter hotels by name, view detailed hotel information, and browse through photo galleries. The project emphasizes performance optimization with debounced search functionality and state management using React's `useState` and `useEffect` hooks.

## Creating a React App using Vite

```sh
npm create vite
```

## Installing Tailwind CSS

```sh
npm install tailwindcss @tailwindcss/vite
```

---

# Components Structure

- **Header** (contains a logo and a search bar)
- **SearchBar** (filter hotels by name.)
- **HotelList** (Displays search results)
- **HotelCard** (Abstracted each hotel info)
- **PhotoGallery** (To swipe between hotel photos in hotel details page)

---

# Implementing searching to fetch hotel list

## Implementing Searching to Fetch Hotel List

Data is fetched using an event handler function that utilizes the Fetch API. The function is optimized with debouncing to minimize unnecessary API calls and improve performance.

---

# Implementing fetching hotel details

- hotel details is fetched by using useEffect to get hotel details when the details page get mount.

---

# Used useState to implement state management
