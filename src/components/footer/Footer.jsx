import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="footer">
      <div className="footer-container">
        
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-desc">{t('footer-bottom-desc')}</p>
      </div>
    </footer>
  )
}
