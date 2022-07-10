import { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement, 
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement, 
    Title,
    Tooltip,
    Legend
);

function ChartTest() {

    const [chartData, setChartData] = useState({
        datasets: [],

    })

    const [chartOptions, setChartOptions] = useState({});
    
    useEffect(() => {
        setChartData({
            labels: ["John", "Kevin", "george", "michael", "Orea"],
            datasets: [
                {
                    label: "change to line bar later ",
                    data: [12, 55, 34, 120, 55],
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "rgba(53, 162, 235, 0.4)",
                },
            ],
        })

        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom"

                },
                title : {
                    display: true,
                    text: "LP Tokens staked vs total LP Tokens"
                }
            }
        })
    }, []);



    return (
        <>
            <div className = "wrapper">
                <Line options = {chartOptions} data = {chartData} />
            </div>
            <style jsx>
                {
                    `
                        .wrapper {
                            
                            color: #04b6bc;
                            width: 100%;
                            height: 100%;
                            background: white;
                            border: 1.40288px solid #000000;
                            padding: 5px;
                        }
                    `
                }


            </style>



        </>
    )
};

export default ChartTest;

