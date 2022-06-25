
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
      const collectAndRender = async () => {
        if (props.data) {
          
          if (props.data[page]?.totalSupply != null ) {
            setDataToBeDisplayed(props.data[page].totalSupply > maxNumberLength ? props.data[page].totalSupply.slice(0, maxNumberLength) : props.data[page].totalSupply);
            setSuffix(props.data[page].totalSupply > maxNumberLength ? props.data[page].totalSupply.length - maxNumberLength : 0)
          }

        }
      }

      collectAndRender();
    }, [page, props.data]);


    // useEffect(() => {
    //     const updateData = () => {
    //       setDataToBeDisplayed(props.data[page].totalSupply > maxNumberLength ? props.data[page].totalSupply.slice(0, maxNumberLength) : props.data[page].totalSupply);
    //       setSuffix(props.data[page].totalSupply > maxNumberLength ? props.data[page].totalSupply.length - maxNumberLength : 0)
    //     }
    //     updateData();
    // }, [page, props.data]);

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
                    <Image src = {`https://res.cloudinary.com/djev64cqn/image/upload/v1656148594/chevron-left_pozygn.png`} alt = "chevron" width = "60" height = "60" />
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
                    <Image src = {`https://res.cloudinary.com/djev64cqn/image/upload/v1656148601/chevron-right_qraw6n.png`} alt = "chevron" width = "60" height = "60" />
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
                font-weight: 800;
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
                font-size: 50px;
                font-weight: 400;
                line-height: 29px;
                
                

                
                
            }
            .wrapper {

              display: flex;
              color: black;
              box-sizing: border-box;
              border: 1px solid black;
              background: white;
              width: 100%;
              height: 100%



              
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
              font-size: 32px;
              font-weight: 400;
              line-height: 29px;
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
              border: none;
              text-align: center;
              background: white;

              height: 50px;

              transition: 0.5s;
              padding: 5px;
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