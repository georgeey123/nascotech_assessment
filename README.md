# Nascotech_assessment - Country Information App

This is a **Next.js** application that fetches and displays country data from the [REST Countries API](https://restcountries.com/). The app allows users to search for countries, view details, and sort them based on population.

---
## 📌 Features
- Search for countries dynamically.
- Sort countries by population (ascending or descending).
- View detailed information about each country, including flag, capital, population, and languages.
- Responsive design using **Tailwind CSS**.
- API calls using **fetch**.

---
## 🛠️ Technologies Used
- **Next.js 15.1.6**
- **React 19**
- **Tailwind CSS** (for styling)
- **Lucide-react** (icons)
- **TypeScript**

---
## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/YOUR_USERNAME/country-app-assessment.git
cd country-app-assessment
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
npm run dev
```

Then, open **http://localhost:3000** in your browser.

### 4️⃣ Build for Production
```sh
npm run build
```

### 5️⃣ Start the Production Server
```sh
npm start
```

---
## 🏗️ Approach
1. **Fetching Data**: The app fetches country data from the REST Countries API and stores it in the component state.
2. **Search & Filtering**: Users can search for countries using the `SearchBar` component, which updates the URL query parameters.
3. **Sorting**: Users can sort countries by population using a dropdown.
4. **Navigation & Details**: Clicking on a country leads to a detail page that provides additional information.
5. **Performance Optimizations**: Using **Suspense** and **React hooks** ensures smooth data fetching and reactivity.
6. **Styling**: Tailwind CSS is used for styling to make the UI clean and responsive.

---
## ✨ Future Enhancements
- Implement client-side caching for API responses.
- Improve UI with additional animations and dark mode.

