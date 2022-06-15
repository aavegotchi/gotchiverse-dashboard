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
              <div>
                <Image src = {`/../public/images/trending-up.png`} alt = "trneding" width = "1000" height = "1000" />
              </div>
              
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
              background: #000000;  
              background: -webkit-linear-gradient(to right, #434343, #000000);  
              background: linear-gradient(to right, #434343, #000000); 

              
            }
  
            .bodyItem {
              flex: 1;
              margin: 0px 20px;
              padding: 30px;
              border-radius: 10px;
              cursor: pointer;

            }
            .tileTitle {
              font-size: 40px;
            }
  
            .dataContainer {
              margin: 10px 0px;
              margin-left: 10px;
              display: flex;
              align-items: center;
              text-align:center;
              width: 100px;
            }
  
            .mainData {
              font-size: 35px;
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