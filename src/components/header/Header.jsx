import { useTranslation } from "react-i18next";
import Navbar from "../navbar/Navbar";
import SetLang from "../setLang/SetLang";
import "./Header.css";

export default function Header() {
  const { t } = useTranslation()
  return (
    <header className="header">
        <div className="header-top">
            <div className="header-top-container">
                <p>{t('header-top-desc')}</p>
                <SetLang />
            </div>
        </div>
        <Navbar />
    </header>
  )
}
