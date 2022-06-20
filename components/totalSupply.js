
import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';

const maxNumberLength = 5;

function TotalSupply(props) {


    const maximumPage = props.data.length;

    const [page, setPage] = useState(0);

    const [dataToBeDisplayed, setDataToBeDisplayed] = useState("");
    const [suffix , setSuffix] = useState(0);



    const [arra, setArra] = useState([]);


    
    useEffect(() => {
        const configureArra = () => {
            setArra(["FUD", "KEK", "FOMO", "ALPHA"]);
        }

        configureArra();
    }, []);


    useEffect(() => {
        const updateData = () => {
          
          if (props.data[page]?.totalSupply && props.data[page].totalSupply > maxNumberLength) {
            setDataToBeDisplayed(props.data[page].totalSupply.slice(0, maxNumberLength));
            const roundedData = Math.round(parseInt(props.data[page].totalSupply));
            const dataString = roundedData.toString();


            setSuffix(dataString.length - maxNumberLength);

          } else {
            setDataToBeDisplayed(props.data[page]?.totalSupply);
          }
            
        }

        updateData();
    }, [page, props.data]);

    // console.log("type of ", typeof props.data[0].totalSupply);

    


    // calculate the change in rates over a certain ... time 

    if (props.data.length == 0) { //check if any data is present at all 
        return <div className="waitingForConnection">Loading...</div>;
      } else 
    return (
      <>
        <div className="wrapper">
            <div className = "bodyWrapper">
                <div className = "left">
                    <button className="button" disabled = {page <= 0} onClick = {() => setPage(page - 1)}>
                    <Image src = {`https://res.cloudinary.com/djev64cqn/image/upload/v1655321124/chevron-left_cjxhb0.png`} alt = "chevron" width = "40" height = "40" />
                    </button>
                </div>
                <div className = "center">
                    <div className = "tileHeader">
                        <span className = "tileHeader">
                            Total Supply
                        </span>

                    </div>

                    <div className = "dataContainerv2">
                        <div className = "mainDatav2">
                            <div className = "heading">
                                <span>AAVEGOTCHI</span>
                            </div>
                            <div className = "tileTitle_wrapper">
                                <span className = "tileTitle">{`${arra[page]}`}</span>
                            </div>
                        </div>
                        <div className = "circularBarWrapperv2">
                          {
                            suffix > 0 ? 
                            <>
                              <span>{`${dataToBeDisplayed} x10`}</span>
                              <span className = "suffix">{`${suffix}`}</span>
                            </>
                            : 
                            <span>{`${dataToBeDisplayed}`}</span>

                          }

                        </div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className = "right">
                    <button className="button" disabled = {page >= maximumPage - 1} onClick = {() => setPage(page + 1)}>
                    <Image src = {`https://res.cloudinary.com/djev64cqn/image/upload/v1655321128/chevron-right_pzqw00.png`} alt = "chevron" width = "40" height = "40" />
                    </button>
                </div>
            </div>
        </div>
        <style jsx>
          {`
            .suffix {
              position: relative;
              bottom: 1rem;
              font-size: 30px;
            }


            .center {

                height: 100%;
                display: flex;
                flex-direction: column;

                flex: 4;
            }

            .heading {
                font-size: 35px;
            }

            .tileHeader {
                font-size: 40px;
            }
            

            .left {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .right {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .bodyWrapper {
                display: flex;

                align-items: center;
                justify-content: space-around;
                height: 100%;
                width: 100%;
            }

            .dataContainerv2 {
                display: flex;
                height: 100%;
                justify-content: space-around;
                align-items: center;
                
                padding-bottom: 10px;
                
            }

            .tileHeader {
                text-align:center;
            }

            .mainDatav2 {
                height: 100%;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                
                padding-bottom: 10px;
                
            }

            .circularBarWrapperv2{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 35px;
                

                
                
            }
            .wrapper {
              width: 100%;
              display: flex;
              color: #04b6bc;
              box-sizing: border-box;
              -webkit-box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
              box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
              border-radius: 10px;
              height: 270px;
              // background: #000000;  
              // background: -webkit-linear-gradient(to right, #434343, #000000);  
              // background: linear-gradient(to right, #434343, #000000); 
              background: #0f0c29;  /* fallback for old browsers */
              background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); 
              background: linear-gradient(to right, #24243e, #302b63, #0f0c29); 


              
            }

            .circularBarWrapper {

                width: 110px;
                position: relative;
                bottom: 10px;
                left: 10px;
                
                flex: 1;
                
            }
  
            .bodyItem {
              flex: 1;
              margin: 0px 20px;
              padding: 30px;
              
              cursor: pointer;

            }
            .tileTitle {
              font-size: 45px;
              text-align: center;

              
            }
  
            .dataContainer {
              margin-top: 10px;
              display: flex;
              align-items: center;
              text-align: center;
              flex-direction: column;
              width: 100%;
            }

            .dataWrapper {
              
              width: 100px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              flex: 1;
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
            }
  
            .negative {
              color: #c23685;
            }
            .buttons {
              display: flex;
              justify-content: space-between;
              
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
              width: 70px;
              margin: 2px;
              background: #6d18f8;
              text-align: center;
              border-radius: 5px;
              color: #04b6bc;
              height: 50px;
              font-size: 15px;
              transition: 0.5s;
              padding: 5px;
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
          `}
        </style>
      </>
    );
  }
  
  export default TotalSupply;