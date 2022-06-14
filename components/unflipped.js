import Image from 'next/image'
import { useEffect, useState } from 'react';




function UnflippedTile(props) {

    const [timeLine, setTimeLine] = useState(24);
    const [dataToBeDisplayed, setDataToBeDisplayed] = useState(0);
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






    if (props.data.length == 0) { //check if any data is present at all 
      return <div className="waitingForConnection">Loading...</div>;
    } else 
    return (
      <>
        <div className="wrapper">
          <div className="bodyItem">
            <span className="tileTitle">{props.title}</span>
            <div className="dataContainer">
              <span className="mainData">
                { dataToBeDisplayed ? dataToBeDisplayed : <div>Loading...</div>}
              </span>
              <span className="dataChanges negative">
                -10%
              </span>
            </div>
            <div className="buttons">
              
                <button className="button time" disabled = {timeLine == 24} onClick = {() => setTimeLine(24)}>24h</button>
                <button className="button time" disabled = {timeLine == 7} onClick = {() => setTimeLine(7)}>7d</button>
                <button className="button time" disabled = {timeLine == 30} onClick ={() => setTimeLine(30)}>30d</button>
              

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
            }
  
            .bodyItem {
              flex: 1;
              margin: 0px 20px;
              padding: 30px;
              border-radius: 10px;
              cursor: pointer;

            }
            .tileTitle {
              font-size: 20px;
            }
  
            .dataContainer {
              margin: 10px 0px;
              display: flex;
              align-items: center;
            }
  
            .mainData {
              font-size: 30px;
              font-weight: 600;
            }
  
            .dataChanges {
              display: flex;
              align-items: center;
              margin-left: 20px;
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
              flex: 1;
              margin: 2px;
              background: #6d18f8;
              text-align: center;
              border-radius: 5px;
              color: #04b6bc;
              height: 30px;
              font-size: 15px;
              transition: 0.5s;
              padding: 2px;
            }

            .button:disabled {
              opacity: 0.5;
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
          `}
        </style>
      </>
    );
  }
  
  export default UnflippedTile;