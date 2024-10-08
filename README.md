# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# E-Commerce Search and Filtering System

This project involves building a fully functional **e-commerce search and filtering system** using **React**, designed to enhance user experience by providing powerful and flexible search functionality. The primary focus of the system is to allow users to easily browse and filter through a variety of products based on different criteria.

## Key Features

### 1. Search Bar Functionality
- A custom search bar allows users to search for products by title.
- As users type, products are dynamically filtered, ensuring fast and responsive search results.
- The case-insensitive search ensures that users can find products regardless of how they enter the search term.

### 2. Category and Filtering Options
- Multiple filter options are integrated, including categories like brand (e.g., Nike, Adidas, Puma) and types of products (e.g., sneakers, flats, sandals).
- Filtering options are provided through radio buttons, dropdowns, and buttons, making the system flexible and user-friendly.
- Users can filter products based on attributes like **color**, **price range**, or **company**.

### 3. Price and Color Filtering
- Custom filters allow users to narrow down products by price range and color, giving them more control over their browsing experience.
- These filters work in combination, allowing users to stack multiple filters together for more precise results.

### 4. Recommended Products Section
- A **Recommended Products** section displays products that match certain criteria, helping to drive attention to specific brands or categories.
- This section is dynamic, allowing users to filter through recommended products based on their preferences.

### 5. Dynamic Product Filtering
- The system can handle complex filtering scenarios where multiple selection options (e.g., category, price, and color) can be applied simultaneously.
- The displayed products update in real-time based on the user's input, ensuring a seamless and efficient shopping experience.

### 6. Refactoring for Clean Code
- Throughout the project, code refactoring was applied to ensure clean, maintainable code.
- Each component (search bar, filter options, product display) was broken down into reusable and scalable components.
- Special attention was given to modularity, making it easier to update or expand the filtering functionality in the future.

### 7. Reusable Components
- Components such as buttons, cards, and input fields were refactored into reusable, independent parts of the application.
- This approach improves code efficiency and readability while allowing for easy updates to the UI in the future.

### 8. Bug Fixes and Performance Optimization
- Several bug fixes were implemented to improve the functionality of the search and filtering system.
- Performance was optimized to ensure fast loading and smooth filtering, even with large datasets.

## Technologies Used
- **React.js**: For the frontend logic and dynamic rendering.
- **CSS**: For styling components and enhancing the overall UI/UX.
- **JavaScript**: For handling state management and filtering logic.

## Outcome
By the end of this project, the e-commerce site is equipped with an efficient, dynamic, and user-friendly search and filtering system. This system enhances the user experience and helps customers quickly find the products they need.

---

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/HuXn-WebDev/React-Ecommerce-Search-Filter.git

