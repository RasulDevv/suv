import "./Searchbar.css";
import { useContext, useEffect, useState } from "react";
import SearchGlass from "../../images/icons/magnifying-glass-solid";
import X from "../../images/icons/x-solid";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export default function Searchbar() {
    const [val, setVal] = useState("")
    const [locations, setLocations] = useState([])
    const [list, setList] = useState([])
    const [focus, setFocus] = useState(false)
    const { t } = useTranslation()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://aquatech-database-default-rtdb.firebaseio.com/locations.json?auth=hWSwzIm7bKC6OwZpvaLUJNvplHdhEzjqgudYwWwA')
                .then(res => res.json())
                .then(data => setLocations(data))
                .catch(err => console.log(err))
        }
        fetchData()
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        navigate(`/loc/${list[0].index}`)
        setList([])
    }

    const handleClick = () => {
        setList([])
    }

    const changeInput = value => {
        setList([])
        setVal(value)
        for (const obj of locations) {
            for (const lang in obj.name) {
                if (obj.name[lang].toLowerCase().includes(value.toLowerCase()) && value) {
                    setList(prev => [...prev, {name: obj.name[lang], index: obj.index}])
                }
            }
        }
    }   

    const inputOnFocus = () => {
        setFocus(true)
        changeInput(val)
    }

    const inputOnBlur = () => {
        setFocus(false)
        setTimeout(() => {
            setList([])
        }, 220)
    }
    
    return (
        <form onSubmit={handleSubmit} className="searchbar" onFocus={inputOnFocus} onBlur={inputOnBlur}>
            <div className="searchbar-container">
                <div className={`searchbar-input-container ${focus ? "focused" : ""}`}>
                    <input type="text" placeholder={t('searchbar-input-placeholder')} value={val} onChange={e => changeInput(e.target.value)} className="searchbar-input" />
                    <div className="searchbar-clean" style={{display: val ? "" : "none"}} onClick={() => setVal("")}>
                        <X width={17} height={12} />
                    </div>
                </div>
                <button className="searchbar-glass-container">
                    <SearchGlass width={20} height={20} />
                </button>
            </div>
            <div className="searchbar-list">
                <ul>
                    {list.map((item, index) => (
                        <li key={index} className="searchbar-list-li">
                            <Link to={`loc/${item.index}`} onClick={handleClick} className="searchbar-list-link">{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    )
}
