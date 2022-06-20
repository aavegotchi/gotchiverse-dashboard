import Image from 'next/image';
import { useState } from 'react';



function UnflippedBanned() {

  const [timeLine, setTimeLine] = useState(24);


  return (
    <>
      <div className = "widget">
        <div className = "left">
          <span className = "title">USERS BANNED</span>
          <span className = "counter">21312</span>
          <div className = "buttons">
            <button className = "button" disabled = {timeLine == 24} onClick = {() => setTimeLine(24)}>24H</button>
            <button className = "button" disabled = {timeLine == 7} onClick = {() => setTimeLine(7)}>7D</button>
            <button className = "button" disabled = {timeLine == 30} onClick ={() => setTimeLine(30)}>30d</button>
          </div>
        </div>
        <div className = "right">
          <div className = "percentage">
            
            <span className = "percentageWeightage">20%</span>
            <div>
              <Image 
              src = "https://res.cloudinary.com/djev64cqn/image/upload/v1655388155/chevron-up_vfxsog.png"
              alt = "trend"
              height = {100}
              width = {100}
              />
            </div>
          </div>
          <div className = "image__Wrapper">
            <Image 
            src = "https://res.cloudinary.com/djev64cqn/image/upload/v1655389720/theifgotchi_fbdk4v.png" 
            alt = "banned" 
            height = {150} 
            width = {180} 
            />
          </div>
        </div>

        
      </div>
      <style jsx>
        {`
            .wrapper {
              width: 100%;
              display: flex;
              color: #04b6bc;
              box-sizing: border-box;
              -webkit-box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
              box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
              border-radius: 10px;
              height: 270px;
              

BCFF
              
            }

            .percentage {
              display: flex;
              font-weight: 500;
              padding-left: 10px;
              
            }

            .percentageWeightage {
              font-weight: 600;
              font-size: 35px;
            }

            .widget {
              display: flex;
              justify-content: space-around;
              flex: 1;
              background: #f4c4f3; 
              background: -webkit-linear-gradient(to right, #fc67fa, #f4c4f3); 
              background: linear-gradient(to right, #fc67fa, #f4c4f3); 




              padding: 10px;
              -webkit-box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
              box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
              border-radius: 10px;
              height: 200px;
            }

            .buttons {
              
              display: flex;
              justify-content: center;
              align-items: center;
              

            }

            .button {
              width: 50px;
              height: 40px;
              color: #04b6bc;
              background: #6d18f8;
              
              
              transition: 1s;
              padding: 2px;
              margin: 1px;
              border-radius: 5px;
              border: none;
              font-size: 23px;
            }
            button:hover {
              background: #04b6bc;
              color: #6d18f8;
              transition: 0.2s ease-in-out;
            }

            .button:disabled {
              background-color: #CF15F9;
              pointer-events: none;
            }


            .left {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              font-size: 20px;
              color: black;
            }

            .counter {
              font-weight: 300;
              font-size: 50px;
            }

            .right {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              color: black;
            }

            .title {
              font-weight: 500;
              font-size: 30px;
              color: black;
            }

            .image__Wrapper {
              border-radius: 50%;
              overflow: hidden;
            }

        `}
      </style>
    </>
  )
}

export default UnflippedBanned;