import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Legend,
    Tooltip
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const Chart = () => {
    const [realAssistData, setRealAssistData] = useState([]);
    const [crimeKeys, setCrimeKeys] = useState([]);

    const years = realAssistData.map(year => (year.data_year))

    console.log('allData', realAssistData)


    useEffect(() => {
        fetch("https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCrimeKeys(data.keys)
                setRealAssistData(data.data)
            })

    }, [])

    const data = {
        labels: years,
        datasets: [{
            label: 'Sales of the week',
            data: [3, 7, 15, 25],
            backgroundColor: 'aqua',
            borderColor: 'black',
            pointBorderColor: 'red',
            fill: true,
            tension: 0.4
        }]
    }
    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 25
                }
            }
        }
    }
    return (
        <div>
            <h1>Hello world</h1>
            <div style={{ width: "600px", height: "300px" }}>
                <Line
                    data={data}
                    options={options}
                ></Line>
            </div>
        </div>
    );
};

export default Chart;