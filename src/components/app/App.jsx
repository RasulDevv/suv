import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "../../layouts/MainLayout";
import NotFound from "../../pages/not-found/NotFound";
import Home from "../../pages/home/Home";
import AboutUs from "../../pages/about-us/AboutUs";
import AboutSensors from "../../pages/about-sensors/AboutSensors";
import Contact from "../../pages/contact/Contact";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { createContext, useState } from "react";
import Location from "../../pages/location/Location";

const LanguageContext = createContext();

export default function App() {
  const [language, setLanguage] = useState("uz");

  const changeLanguage = lang => setLanguage(lang);

  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <LanguageContext.Provider value={{language, changeLanguage}}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about-sensors" element={<AboutSensors />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="loc/:path" element={<Location />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </LanguageContext.Provider>
      </I18nextProvider>
    </BrowserRouter>
  )
}

export { LanguageContext };