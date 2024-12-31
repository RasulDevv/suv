import { NavLink } from "react-router-dom";
import toggleMenu from "../../utils/toggleMenu";
import { useTranslation } from "react-i18next";

export default function NavList({isOpen,setIsOpen}) {
    const { t } = useTranslation()
  return (
    <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li style={{display: isOpen ? "" : "none"}} onClick={() => toggleMenu(isOpen, setIsOpen)}>
            <div className="x-symbol"></div>
        </li>
        <li>
            <NavLink to="/" onClick={() => toggleMenu(isOpen, setIsOpen)} className={({isActive}) => isActive ? "nav-link-active nav-link" : "nav-link"}>{t('nav-list-home')}</NavLink>
        </li>
        <li>
            <NavLink to="about-sensors" onClick={() => toggleMenu(isOpen, setIsOpen)} className={({isActive}) => isActive ? "nav-link-active nav-link" : "nav-link"}>{t('nav-list-sensors')}</NavLink>
        </li>
        <li>
            <NavLink to="about-us" onClick={() => toggleMenu(isOpen, setIsOpen)} className={({isActive}) => isActive ? "nav-link-active nav-link" : "nav-link"}>{t('nav-list-us')}</NavLink>
        </li>
        <li>
            <NavLink to="contact" onClick={() => toggleMenu(isOpen, setIsOpen)} className={({isActive}) => isActive ? "nav-link-active nav-link" : "nav-link"}>{t('nav-list-contact')}</NavLink>
        </li>
    </ul>
  )
}
