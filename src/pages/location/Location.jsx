import { useParams } from "react-router-dom";
import "./Location.css";
import { useContext, useEffect, useState } from "react";
import BarChart from "../../components/barchart/BarChart";
import { LanguageContext } from "../../components/app/App";


const now = new Date();
const gmtOffset = 5;
const today = new Date(now.getTime() + gmtOffset * 60 * 60 * 1000);


export default function Location() {
    const [values, setValues] = useState({});
    const [chartValues, setChartValues] = useState({});
    const [name, setName] = useState({});
    const [date, setDate] = useState(`${today.getUTCFullYear()}-${today.getUTCMonth() + 1}-${today.getUTCDate()}`);
    const { path } = useParams();
    const { language } = useContext(LanguageContext);
    
    useEffect(() => {
        const a = async () => {
            await fetch(`https://aquatech-database-default-rtdb.firebaseio.com/locations/${path}.json?auth=hWSwzIm7bKC6OwZpvaLUJNvplHdhEzjqgudYwWwA`)
                .then(res => res.json())
                .then(d => {
                    const obj = {};
                    for (const yyyy in d["values"]) {
                        if (d["values"][yyyy]) {
                            obj[yyyy] = {};
                            for (const mm in d["values"][yyyy]) {
                                if (d["values"][yyyy][mm]) {
                                    obj[yyyy][mm] = {};
                                    for (const dd in d["values"][yyyy][mm]) {
                                        if (d["values"][yyyy][mm][dd]) {
                                            obj[yyyy][mm][dd] = {};
                                            for (const key in d["values"][yyyy][mm][dd]) {
                                                if (d["values"][yyyy][mm][dd][key]) {
                                                    obj[yyyy][mm][dd][key] = {
                                                        ph: d["values"][yyyy][mm][dd][key].ph,
                                                        turbidity: d["values"][yyyy][mm][dd][key].turbidity,
                                                        time: d["values"][yyyy][mm][dd][key].time,
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    setValues(prev => ({...prev, ...obj}))
                    setName(d.name)
                })
                .catch(err => console.log(err))
        }
        a()
        const interval = setInterval(a, 6000); // 600000 ms = 10 daqiqa
        return () => clearInterval(interval);
    }, [path])

    useEffect(() => {
        const time = date.split('-')
        const vals = values[time[0].slice(2)]?.[time[1]]?.[time[2]]
        const chartVals = []
        for (const key in vals) {
            chartVals.push({
                key: key,
                time: vals[key].time,
                turbidity: vals[key].turbidity,
                ph: vals[key].ph
            })
        }
        setChartValues(chartVals)
    }, [values])

    return (
        <div className="location-page">
            <h3 className="location-name">{name[language]}</h3>
            <div className="location-date">
                <input type="date" value={date} min={'2024-12-30'} onChange={e => setDate(e.target.value)} className="location-date-input" />
            </div>
            <BarChart values={chartValues} />
        </div>
    )
}
