import "./Home.css";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../components/app/App";
import { Link } from "react-router-dom";
import a1 from "../../images/water/2.jpg";
import a2 from "../../images/water/3.jpg";
import a3 from "../../images/water/4.jpg";

export default function Home() {
    const [locations, setLocations] = useState([]);
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        const f = async () => {
            await fetch('https://aquatech-database-default-rtdb.firebaseio.com/locations.json?auth=hWSwzIm7bKC6OwZpvaLUJNvplHdhEzjqgudYwWwA')
            .then(res => res.json())
            .then(data => setLocations(data))
            .catch(err => console.log(err))
        }
        f()
    }, [])

    return (
        <div className="home-page">
            <div className="home-locations">
                <ul className="home-locations-list">
                    {locations.map((item, index) => (
                        <li key={index}>
                            <Link to={`loc/${index}`} className="home-locations-link">{item.name[language]}</Link>
                        </li>
                    ))}
                </ul>

            </div>
            <div className="home-images">
                <img src={a1} alt="" className="home-image" />
                <img src={a2} alt="" className="home-image" />
                <img src={a3} alt="" className="home-image home-image-a3" />
            </div>
        </div>
    )
}
