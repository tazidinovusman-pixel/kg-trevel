import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './layout/header/Header';
import HomePage from './pages/home/HomePage';
import CatalogPage from "./pages/catalog/CatalogPage.jsx";
import ContactsPage from "./pages/contacts/ContactsPage.jsx";
import AboutCompany from "./pages/about-company/AboutCompanyPage.jsx";
import Blog from "./pages/blog/Blog.jsx";
import News from "./pages/news/NewsPage.jsx";
import CompanyService from './service/CompanyService';

function App() {
  const [allTours, setAllTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);

  const [filters, setFilters] = useState({
    type: "Любой",
    minDays: "",
    maxDays: "",
    date: ""
  });

  // 🔥 загрузка данных из Supabase
  useEffect(() => {
    const loadTours = async () => {
      const data = await CompanyService.getAll();
      if (data) {
        setAllTours(data);
        setFilteredTours(data);
      }
    };
    loadTours();
  }, []);

  // 🔥 фильтрация
  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    const filtered = allTours.filter((tour) => {
      const matchType = newFilters.type === "Любой" || tour.type === newFilters.type;
      const matchMinDays = newFilters.minDays === "" || tour.days >= Number(newFilters.minDays);
      const matchMaxDays = newFilters.maxDays === "" || tour.days <= Number(newFilters.maxDays);
      const matchDate = newFilters.date === "" || tour.startDate === newFilters.date;

      return matchType && matchMinDays && matchMaxDays && matchDate;
    });

    setFilteredTours(filtered);
  };

  return (
    <div className="container-app">
      <Header />
      <Routes>
        <Route path="/" element={
          <HomePage 
            filteredTours={filteredTours} 
            onFilterChange={handleFilterChange} 
          />
        } />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/about-company' element={<AboutCompany />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;