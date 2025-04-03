# Project Setup (HotelHunt)

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

- Data is fetched by an event handler function with a fetch API whenever the user insert a new letter to perform filtering.

---

# Implementing fetching hotel details

- hotel details is fetched by using useEffect to get hotel details when the details page get mount.

---

# Used useState to implement state management
