import Image from 'next/image'
import { useEffect, useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import ChartTest from './chartTest';



function UnflippedTile(props) {


    const [expanded, setExpanded] = useState(false);
    const [timeLine, setTimeLine] = useState(24);
    const [dataToBeDisplayed, setDataToBeDisplayed] = useState(0);
    const maxNumberLength = 7;
    console.log("here,", dataToBeDisplayed);
    // calculate the change in rates over a certain ... time 
    useEffect(() => {
      if (timeLine == 24) {
        setDataToBeDisplayed(props.data[0]); 

      } else if (timeLine == 7) {
        setDataToBeDisplayed(props.data[1])


      } else if (timeLine == 30) {
        setDataToBeDisplayed(props.data[2]);

      }

    }, [timeLine, props.data])

    useEffect(() => {
      setDataToBeDisplayed(props.data[0]);
    }, []);

    console.log(typeof dataToBeDisplayed);
    function snipNumber(number) {
      if (number.length > maxNumberLength) {
        return number.slice(0,4) + "..." + number.slice(number.length - 3, -1);
      } else {
        return number;
      }
    }





    if (props.data.length == 0) { //check if any data is present at all 
      return <div className="waitingForConnection">Loading...</div>;
    } else 
    return (
      <>
          <div className="wrapper">
            <div className="bodyItem">
              <div className="buttons">
                  
                  <button className="button time" disabled = {timeLine == 24} onClick = {() => setTimeLine(24)}>24H</button>
                  <button className="button time" disabled = {timeLine == 7} onClick = {() => setTimeLine(7)}>7D</button>
                  <button className="button time" disabled = {timeLine == 30} onClick ={() => setTimeLine(30)}>30D</button>
              </div>
              <span className="tileTitle">{props.title}</span>
              <div className="dataContainer">
                <span className="mainData">
                  { dataToBeDisplayed ? snipNumber(dataToBeDisplayed) : <div>Loading...</div>}
                </span>
                <span className="dataChanges negative">
                  -10% 
                  
                </span>
              </div>
              <div className = "trendWrapper">
                  <Image src = {`https://res.cloudinary.com/djev64cqn/image/upload/v1655320547/trending-up_aryatl.png`} alt = "trending" width = "50" height = "50" />
              </div>

            </div>
          </div>
          <style jsx>
            {`
              .wrapper {
                width: 100%;
                
                display: flex;
                color: #04b6bc;
                -webkit-box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
                box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
                border-radius: 10px;
                // background: #000000;  
                // background: -webkit-linear-gradient(to right, #434343, #000000);  
                // background: linear-gradient(to right, #434343, #000000); 
                background: #0f0c29;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); 
                background: linear-gradient(to right, #24243e, #302b63, #0f0c29); 

                height: 90%;

                
              }

              .bodyItem {
                width: 100%;
                margin: 0px 20px;
                padding: 30px;
                border-radius: 10px;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;

              }
              .tileTitle {
                font-size: 38px;
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
                align-items: center;
                margin-left: 20px;
                font-size: 23px;
                
              }
    
              .negative {
                color: #c23685;
              }
              .buttons {
                display: flex;
                justify-content: space-around;
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
                width: 80px;
                height: 50px;
                flex: 1;
                margin: 2px;
                background: #6d18f8;
                text-align: center;
                border-radius: 5px;
                color: #04b6bc;
                font-size: 22px;
                transition: 0.5s;
                padding: 2px;
              }

              .button:disabled {
                background-color: #CF15F9;
                pointer-events: none;
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
    );
  }
  
  export default UnflippedTile;