import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../components/app/App";
import "./AboutSensors.css";
import { useContext, useEffect, useState } from "react"

export default function AboutSensors() {
  const [sensors, setSensors] = useState([])
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation()
  useEffect(() => {
    const a = async () => {
      await fetch("https://aquatech-database-default-rtdb.firebaseio.com/about-sensors.json?auth=hWSwzIm7bKC6OwZpvaLUJNvplHdhEzjqgudYwWwA")
        .then(res => res.json())
        .then(d => {
          const arr = [];
          for (const key in d) {
            arr.push({
              key: key, 
              name: d[key].name, 
              accuracy: d[key].accuracy, 
              html_doc: d[key].html_doc, 
              normal_range: d[key].normal_range, 
              range: d[key].range
            })
          }
          setSensors(arr)
        })
        .catch(err => console.log(err))
    }
    a()
  }, [])
  
  return (
    <div className="about-sensors-page">
      <table className="about-sensors-table">
        <thead>
          <tr>
            <th>{t('about-sensors-table-sensor')}</th>
            <th>{t('about-sensors-table-accuracy')}</th>
            <th>{t('about-sensors-table-range')}</th>
            <th>{t('about-sensors-table-normalRange')}</th>
          </tr>
        </thead>
        <tbody>
          {sensors.map(data => (
            <tr key={data.key}>
              <td><a className="about-sensor-link" href={`#${data.key}`}>{data.name[language]}</a></td>
              <td>{data.accuracy}</td>
              <td>{data.range}</td>
              <td>{data.normal_range}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {sensors.map(item => (
          <div className="about-sensor" id={item.key} dangerouslySetInnerHTML={{__html: item.html_doc[language]}} key={item.key} />
      ))}
    </div>
  )
}



