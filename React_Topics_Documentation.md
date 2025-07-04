# What is React?

**React** is a popular open-source JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It allows developers to create large web applications that can update and render efficiently in response to data changes.

---

# Why Use React.js?

- **Component-Based Architecture:** Build encapsulated components that manage their own state and compose them to create complex UIs.
- **Declarative UI:** Describe what you want the UI to look like, and React updates the UI when your data changes.
- **Virtual DOM:** Optimizes rendering and improves performance by using a virtual DOM.
- **Reusable Code:** Components can be reused across different parts of your application, making development faster and more organized.
- **Strong Community & Ecosystem:** Large community, many resources, and a rich ecosystem of third-party libraries.

---

# React Topics Covered in This Project

This document summarizes the main React topics covered in this project, with explanations and code examples from the codebase.

---

## 1. Functional Components

**Description:**
React functional components are JavaScript functions that return JSX. They are the building blocks of any React application.

**Example:**
```jsx
// src/components/Card.jsx
function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
export default Card;
```

---

## 2. Props

**Description:**
Props (short for properties) are used to pass data from parent to child components.

**Example:**
```jsx
// src/features/Home/CardCarousal.jsx
<Card title="Product 1" description="This is a product." />
```

---

## 3. State

**Description:**
State allows components to create and manage their own data that can change over time.

**Example:**
```jsx
// src/features/Home/heroSection.jsx
import React, { useState } from 'react';

function HeroSection() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default HeroSection;
```

---

## 4. useEffect Hook

**Description:**
The `useEffect` hook lets you perform side effects in function components (e.g., data fetching, subscriptions).

**Example:**
```jsx
// src/hooks/useApiGet.jsx
import { useEffect, useState } from 'react';

function useApiGet(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData);
  }, [url]);
  return data;
}
export default useApiGet;
```

---

## 5. Custom Hooks

**Description:**
Custom hooks let you extract and reuse component logic.

**Example:**
```jsx
// src/hooks/useApiGet.jsx
// ...see above for implementation...
```

---

## 6. Component Composition

**Description:**
React allows you to compose components together to build complex UIs.

**Example:**
```jsx
// src/features/Home/index.jsx
import CardCarousal from './CardCarousal';
import Categories from './Categories';
import HeroSection from './heroSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <CardCarousal />
    </div>
  );
}
export default Home;
```

---

## 7. Conditional Rendering

**Description:**
Render different UI elements based on conditions.

**Example:**
```jsx
// src/components/Card.jsx
function Card({ title, description, isAvailable }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      {isAvailable ? <span>In Stock</span> : <span>Out of Stock</span>}
    </div>
  );
}
```

---

## 8. Lists and Keys

**Description:**
Render lists of elements using `map` and assign a unique `key` prop.

**Example:**
```jsx
// src/features/Home/Categories.jsx
function Categories({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

---

## 9. Event Handling

**Description:**
Handle user events like clicks.

**Example:**
```jsx
// src/features/Home/heroSection.jsx
<button onClick={() => setCount(count + 1)}>Increment</button>
```

---

## 10. Basic Routing (if applicable)

**Description:**
React Router is used for navigation between pages. (Add this section if you use React Router in your project.)

**Example:**
```jsx
// src/pages/home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/product/1">Go to Product 1</Link>
    </div>
  );
}
```

---

## 11. CSS Styling

**Description:**
Styling components using CSS files or inline styles.

**Example:**
```jsx
// src/App.css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
}
```

---


