import Image from 'next/image'
import { useEffect, useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

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

function UnflippedTile({ title, data, data1d, data7d, data30d}) {
  const [expanded, setExpanded] = useState(false);
  const [timeLine, setTimeLine] = useState(100);
  const [dataToBeDisplayed, setDataToBeDisplayed] = useState(0);
  const [trendChange, setTrendChange] = useState(0);
  const [suffix, setSuffix] = useState(0);
  const maxNumberLength = 5;
  useEffect(() => {
    setDataToBeDisplayed(data.toString().length > 8 ? data.toString().slice(0, -18) : data);
  }, []);

  useEffect(() => {
    const change = dataToBeDisplayed/data;
    console.log("Here", change);
    setTrendChange(change.toFixed(2));
  }, [timeLine]);

  console.log(title, data);
  // calculate the change in rates over a certain ... time
  // useEffect(() => {
  //   if (timeLine == 24) {
  //     setDataToBeDisplayed(
  //       data[0].length > maxNumberLength
  //         ? data[0].slice(0, maxNumberLength)
  //         : data[0]
  //     );
  //     setSuffix(
  //       data[0].length > maxNumberLength ? data[0].length - maxNumberLength : 0
  //     );
  //   } else if (timeLine == 7) {
  //     setDataToBeDisplayed(
  //       data[1].length > maxNumberLength
  //         ? data[1].slice(0, maxNumberLength)
  //         : data[2]
  //     );
  //     setSuffix(
  //       data[1].length > maxNumberLength ? data[1].length - maxNumberLength : 0
  //     );
  //   } else if (timeLine == 30) {
  //     setDataToBeDisplayed(
  //       data[2].length > maxNumberLength
  //         ? data[2].slice(0, maxNumberLength)
  //         : data[2]
  //     );
  //     setSuffix(
  //       data[2].length > maxNumberLength ? data[2].length - maxNumberLength : 0
  //     );
  //   }
  // }, [timeLine, data]);

  console.log(data);

  if (data.length == 0) {
    //check if any data is present at all
    return <div className="waitingForConnection">Loading...</div>;
  } else
    return (
      <AnimateSharedLayout>
        {
          !expanded? 
        
      <>
        <div className="wrapper">
          <div className="bodyItem">
            <div className="buttons">
              <button
                className="button time"
                disabled={timeLine == 24}
                onClick={() => {
                  setTimeLine(24);
                  setDataToBeDisplayed(data1d.toString().length > 8 ? data1d.toString().slice(0, -18) : data1d);

                }}
              >
                24 h
              </button>
              <button
                className="button time"
                disabled={timeLine == 7}
                onClick={() => {
                  setTimeLine(7);
                  setDataToBeDisplayed(data7d.toString().length > 8 ? data7d.toString().slice(0, -18) : data7d);
                }}
              >
                7 d
              </button>
              <button
                className="button time"
                disabled={timeLine == 30}
                onClick={() => {
                  setTimeLine(30);
                  setDataToBeDisplayed(data30d.toString().length > 8 ? data30d.toString().slice(0, -18) : data30d);
                }}
              >
                30 d
              </button>
              <button
                className = "button time"
                disabled = {timeLine == 100}
                onClick = {() => {
                  setTimeLine(100);
                  setDataToBeDisplayed(data.toString().length > 8 ? data.toString().slice(0, -18) : data);
                }}
              >
                total
              </button>
              
            </div>
            <span className="tileTitle">{title}</span>
            <div className="dataContainer">
              {suffix == 0 ? (
                <span className="mainData">
                  {data ? dataToBeDisplayed : <div>Loading...</div>}
                </span>
              ) : (
                <>
                  <span className="mainData">
                    {data ? `${data} x10` : <div>Loading...</div>}
                  </span>

                  <span className="suffix">{`${suffix}`}</span>
                </>
              )}
            </div>



            {timeLine != 100 && 
            
              <div className="trendWrapper">
                  <Image
                    src={`/images/trending-up.png`}
                    alt="trending"
                    width="62"
                    height="55"
                  />
                <span className="dataChanges positive">{
                  trendChange

                }</span>
              </div>
            }



          </div>
        </div>
        <style jsx>
          {`
              .wrapper {

              
              display: flex;
              color: black;
              border: 1px solid #000000;
              background: white;
              height: 278px;
              width: 100%;
              cursor:pointer;
              transition: 0.5s ease-in-out ;
              position: relative;
              overflow: hidden;
              
            }
            

            .wrapper:hover {
              color: white;
              background: #FA34F3;
              transform: translateX(-2px);
            

            }


            .trendWrapper {

              display: flex;
              justify-content: center;
              align-items: center;
              height: 60px;
            }

            .suffix {
              position: relative;
              bottom: 1rem;
              font-size: 35px;
            }

            .bodyItem {
              width: 100%;
              margin: 0px 20px;
              padding-bottom: 15px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-align: center;
              

            }
            .tileTitle {
              margin-top: 20px;
              font-size: 32px;
              font-weight: 800;
              line-height: 29.73px;
              display: inline-block;
              width: 100%;
              
              
            }
  
            .dataContainer {
              

              display: flex;
              justify-content: center;
              align-items: center;
              text-align:center;
              
            }
  
            .mainData {
              font-size: 40px;
              font-weight: 600;
              padding: 10px;
              
            }
  
            .dataChanges {
              display: flex;
              font-weight: 400;
              align-items: center;
              margin-left: 20px;
              font-size: 50px;
              line-height: 46.45px;
              
            }
  
            .negative {
              color: #c23685;
            }
            .buttons {
              display: flex;
              justify-content: space-around;
              align-items: center;
              width: 100%;
              
            }
            .bottomLeft {
              flex: 4;
              display: flex;
            }
            .bottomRight {
              flex: 4;
            }
  
            .button {
              box-sizing: border-box;
              width: 65px;
              height: 45px;
              flex: 1;
              margin: 5px;
              background: #B8B8B8;
              border: 1px solid #111111;
              box-shadow: 4px 4px 0px #000000;
              text-align: center;
              color: black;
              font-size: 22px;
              line-height: 20.44px;
              font-weight: 400;
              transition: 0.5s;
              padding: 2px;
            }

            .button:disabled {
              background-color: #CF15F9;
              pointer-events: none;
              color: white;
            }
  
            .button:hover {
              background: #04b6bc;
              color: #6d18f8;
              transition: 0.2s ease-in-out;
            }

            .graph {
              margin-left: 20px;
            }
            .time {
              width: 35px;
            }
            @media (max-width: 1400px) {
              * {
                padding: 0;
              }
              .time {
                width: 35px;
              }
              @media (max-width: 1400px) {
                * {
                  padding: 0;
                }
            `}
        </style>
      </>
      :
      <GraphExpanded data = {props} expandedFunction = {() => {
        setExpanded(false);
      }}/>
}
      </AnimateSharedLayout>
    );
  }
  
  export default UnflippedTile;


function GraphExpanded({props, expandedFunction}) {

  const [chartData, setChartData] = useState({
    datasets: [],

});

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


  return(
    <>
      <div className = "wrapper">
          <Line options = {chartOptions} data = {chartData} />
          <div className = "buttonWrapper">
            <div>
              <button className = "button" onClick = {expandedFunction}>BACK</button>
            </div>
            <div>
              <button className = "button">24 h</button>
              <button className = "button">7 d</button>
              <button className = "button">30 d</button>
            </div>
          </div>
      </div>
      <style jsx>
          {
              `
                  .wrapper {
                      
                      color: #04b6bc;
                      width: 100%;
                      height: 278px;
                      background: white;
                      border: 1.40288px solid #000000;
                      padding: 5px;
                      display: flex;
                      flex-direction: column;
                      justify-content: space-around;
                      align-items: center;
                  }

                  .buttonWrapper {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    justify-content: space-around;
                    align-items: center;
                  }

                  .button {
                    box-sizing: border-box;
                    width: 65px;
                    height: 45px;
                    flex: 1;
                    margin: 5px;
                    background: #B8B8B8;
                    border: 1px solid #111111;
                    box-shadow: 4px 4px 0px #000000;
                    text-align: center;
                    color: black;
                    font-size: 22px;
                    line-height: 20.44px;
                    font-weight: 400;
                    transition: 0.5s;
                    padding: 2px;
                  }
                  .button:disabled {
                    background-color: #CF15F9;
                    pointer-events: none;
                    color: white;
                  }
        
                  .button:hover {
                    background: #04b6bc;
                    color: #6d18f8;
                    transition: 0.2s ease-in-out;
                  }

                  
              `
          }


      </style>
    </>
  )
}
