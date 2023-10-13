import { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const [realAssistData, setRealAssistData] = useState([]);


    const years = realAssistData.map(year => (year.data_year))
    console.log('onlyYears', years)
    console.log('allData', realAssistData)


    const data = [{ name: `${years.map(year => year)}`, uv: 100, pv: 2400, amt: 2400 },];



    useEffect(() => {
        fetch("https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRealAssistData(data.data)
            })
    }, [])

    return (
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    );
};

export default Chart;