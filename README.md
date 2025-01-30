# Nascotech_assessment - Country Information App

This is a **Next.js** application that fetches and displays country data from the [REST Countries API](https://restcountries.com/). The app allows users to search for countries, view details, and sort them based on population.

---
## Features
- Search for countries dynamically.
- Sort countries by population (ascending or descending).
- View detailed information about each country, including flag, capital, population, and languages.
- Responsive design using **Tailwind CSS**.
- API calls using **fetch**.

---
## Technologies Used
- **Next.js 15.1.6**
- **React 19**
- **Tailwind CSS** (for styling)
- **Lucide-react** (icons)
- **TypeScript**

---
## Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/YOUR_USERNAME/country-app-assessment.git
cd country-app-assessment
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Development Server
```sh
npm run dev
```

Then, open **http://localhost:3000** in your browser.

### 4. Build for Production
```sh
npm run build
```

### 5. Start the Production Server
```sh
npm start
```
---
1. **Data Fetching & State Management**  
   - The application fetches country data from the [REST Countries API](https://restcountries.com/) using `fetch`.  
   - API calls are managed efficiently to prevent unnecessary requests.  
   - Country data is stored in a local state using `useState` for better state management and reactivity.

2. **Search & Filtering**  
   - The `SearchBar` component updates the query parameters in the URL dynamically.    
   - The search query is persisted in the URL, ensuring state retention during navigation.

3. **Sorting Mechanism**  
   - A dropdown component allows sorting countries based on population.  
   - Sorting is implemented at the state level, ensuring minimal re-renders and efficient updates.

4. **Navigation & Country Details**  
   - Clicking on a country card navigates to a dynamic `/country/[id]` route.  
   - The page fetches and displays detailed country data, including flag, capital, population, languages, and geographic information.  
   - Static pre-generation (`getStaticProps` and `getStaticPaths`) optimizes loading times.

5. **Performance Optimizations**  
   - **Suspense & Lazy Loading**: `Suspense` is used to handle loading states smoothly.  
   - **React Server Components**: Next.js's App Router leverages server-side rendering (SSR) where applicable.  
   - **Code Splitting**: Components are dynamically imported to improve load performance.  

6. **Styling & Responsiveness**  
   - The UI is built with **Tailwind CSS**, providing utility-based styling for flexibility and performance.  
   - A responsive grid layout ensures a seamless experience across different screen sizes.  
   - Dark mode is planned as a future enhancement.

## Deployment Link
[George Ohene Assessment](https://nascotech-assessment.vercel.app/)

