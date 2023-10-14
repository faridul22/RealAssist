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

const MainChart = () => {
    const [realAssistData, setRealAssistData] = useState([]);

    const years = realAssistData.map(year => (year.data_year))
    const crimeName = realAssistData.map(nameOfCrime => nameOfCrime.Burglary / 100)
    console.log('Burglary', crimeName)
    console.log('allData', realAssistData)



    useEffect(() => {
        fetch("https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRealAssistData(data.data)
            })

    }, [])

    const data = {
        labels: years,
        datasets: [{
            label: 'Burglary',
            data: crimeName,
            // backgroundColor: 'aqua',
            borderColor: '#1463FF',
            fill: true,
            tension: 0.4
        }]
    }
    const options = {
        plugins: {
            legend: false,

        },
        scales: {
            y: {
                display: true,
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 25
                }
            },
            x: {
                grid: {
                    display: false,
                },


            },

            responsive: true,
        },
        elements: {
            point: {
                radius: 0,
                hoverRadius: 0,
            },
        },
    }
    return (
        <div className='w-[563px] rounded-xl mt-3 bg-[#F2F4F5] pb-3'>
            <p className='w-full bg-[#E8EEFB] rounded-t-xl mb-3 pb-1 px-2'>
                <small className='text-[#1463FF] font-bold text-[9px] self-center'>Burglary</small>
            </p>
            <div style={{ width: "520px", height: "" }} className='mx-auto bg-white rounded-xl py-1 px-2'>
                <Line
                    data={data}
                    options={options}
                ></Line>
            </div>
        </div >
    );
};

export default MainChart;