import "./SetLang.css";
import { useContext, useEffect, useState } from "react";
import ruLogo from "../../images/flags/russia.jpg";
import enLogo from "../../images/flags/usa.jpg";
import uzLogo from "../../images/flags/uzbekistan.jpg";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../app/App";

const langs = [
  {
    value: "uz",
    shape: "O'zbekcha",
    logo: uzLogo
  },
  {
    value: "ru",
    shape: "Русcкий",
    logo: ruLogo
  },
  {
    value: "en",
    shape: "English",
    logo: enLogo
  },
];

export default function SetLang() {
    const { i18n } = useTranslation()
    const { language, changeLanguage } = useContext(LanguageContext);

    useEffect(() => {
      i18n.changeLanguage(language)
    }, [language])

    const f = () => {
      const selectedLang = langs.find((item) => item.value === language);
      return selectedLang ? selectedLang.logo : "";
    }

  return (
    <div className="set-lang">
      <img src={f()} alt="" className="set-lang-img" />
      <select className="set-lang-container" onChange={e => changeLanguage(e.target.value)}>
        {langs.map(item => (
          <option value={item.value} className="set-lang" key={item.value}>{item.shape}</option>
        ))}
      </select>
    </div>
  )
}
