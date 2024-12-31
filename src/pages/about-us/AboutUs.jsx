import { useContext, useEffect, useState } from "react";
import "./AboutUs.css";
import { LanguageContext } from "../../components/app/App";

export default function AboutUs() {
  const [data, setData] = useState({})
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const a = async () => {
      await fetch('https://aquatech-database-default-rtdb.firebaseio.com/about-us.json?auth=hWSwzIm7bKC6OwZpvaLUJNvplHdhEzjqgudYwWwA')
        .then(res => res.json())
        .then(d => setData(d))
        .catch(err => console.log(err))
    }
    a()
  }, [])

  return (
    <div className="about-us-page">
      <div className="about-us-container">
        {data.partners?.map((item, index) => (
          <p key={index} className="about-partner">{item.role[language]}: <strong>{item["full-name"]}</strong></p>
        ))}
      </div>
    </div>
  )
}
