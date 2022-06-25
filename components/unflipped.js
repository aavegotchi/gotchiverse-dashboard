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



function UnflippedTile(props) {


    const [expanded, setExpanded] = useState(false);
    const [timeLine, setTimeLine] = useState(0);
    const [dataToBeDisplayed, setDataToBeDisplayed] = useState(0);
    const [suffix, setSuffix] = useState(0);
    const maxNumberLength = 5;
    useEffect(() => {

      setTimeLine(24);

    }, []);

    // calculate the change in rates over a certain ... time 
    useEffect(() => {
      if (timeLine == 24) {
        setDataToBeDisplayed(props.data[0].length > maxNumberLength ? props.data[0].slice(0, maxNumberLength) :props.data[0]); 
        setSuffix(props.data[0].length > maxNumberLength ? props.data[0].length - maxNumberLength: 0);

      } else if (timeLine == 7) {
        setDataToBeDisplayed(props.data[1].length > maxNumberLength ? props.data[1].slice(0, maxNumberLength) :props.data[2]);
        setSuffix(props.data[1].length > maxNumberLength ? props.data[1].length - maxNumberLength : 0);


      } else if (timeLine == 30) {
        setDataToBeDisplayed(props.data[2].length > maxNumberLength ? props.data[2].slice(0, maxNumberLength) :props.data[2]);
        setSuffix(props.data[2].length > maxNumberLength ? props.data[2].length - maxNumberLength : 0);

      }

    }, [timeLine, props.data])



    console.log(dataToBeDisplayed);


    if (props.data.length == 0) { //check if any data is present at all 
      return <div className="waitingForConnection">Loading...</div>;
    } else 
    return (
      <AnimateSharedLayout>
        {
          !expanded? 
        
      <>
        <div 
          className="wrapper" 
          onClick = {() => {
            setExpanded(true);
          }}
          layoutId = "graph"
          


        >
          <div className="bodyItem">
            <div className="buttons">
                
                <button className="button time" disabled = {timeLine == 24} onClick = {(event) => {
                  setTimeLine(24); 
                  event.stopPropagation();
                  
                  }}>24 h</button>
                <button className="button time" disabled = {timeLine == 7} onClick = {(event) => {
                  setTimeLine(7);
                  event.stopPropagation();
                  }}>7 d</button>
                <button className="button time" disabled = {timeLine == 30} onClick ={(event) => {
                  setTimeLine(30);
                  event.stopPropagation();
                  }}>30 d</button>
            </div>
            <span className="tileTitle">{props.title}</span>
            <div className="dataContainer">
              {suffix == 0 ? 
                <span className="mainData">
                { dataToBeDisplayed ? dataToBeDisplayed : <div>Loading...</div>}
                </span> :
                <>
                  <span className="mainData">
                  { dataToBeDisplayed ? `${dataToBeDisplayed} x10` : <div>Loading...</div>}
                  </span>
                  
                  <span className = "suffix">{`${suffix}`}</span>
                </>
              }

            </div>
            <div className = "trendWrapper">
                <Image src = {`https://res.cloudinary.com/djev64cqn/image/upload/v1655320547/trending-up_aryatl.png`} alt = "trending" width = "62" height = "55" />
                <span className="dataChanges negative">
                -10% 
                </span>
            </div>


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
            }

            .suffix {
              position: relative;
              bottom: 1rem;
              font-size: 35px;
            }

            .bodyItem {
              width: 100%;
              margin: 0px 20px;
              padding: 15px;
              border-radius: 10px;
              
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