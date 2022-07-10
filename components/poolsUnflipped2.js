
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';


const poolObject = {
    "0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4" : "GHST - USDC", 
    "0xf69e93771f11aecd8e554aa165c3fe7fd811530c" : "GHST - MATIC",
    "0xb0e35478a389dd20050d66a67fb761678af99678" : "GHST - GLTR", 
    "0xbfad162775ebfb9988db3f24ef28ca6bc2fb92f0":  "GHST - KEK", 
    "0xc765eca0ad3fd27779d36d18e32552bd7e26fd7b" : "GHST - ALPHA",
    "0x641ca8d96b01db1e14a5fba16bc1e5e508a45f2b" : "GHST - FOMO",
    "0xfec232cc6f0f3aeb2f81b2787a9bc9f6fc72ea5c" : "GHST - FUD", 
    "0x73958d46b7aa2bc94926d8a215fa560a5cdca3ea" : "WAP - GHST",

};


// store them inside an array to map them easier instead of looking them up at every component update 

function PoolsUnflippedV2(props) {

    
    const maximumPage = props.data.length;

    const [page, setPage] = useState(0);
    // we can map the index of the pool to the page number 

    const [pool, setPool] = useState(props.data[0]);

    const [cache, setCache] = useState([]);

    // using a cache to access at O(1) time ;
    useEffect(() => {
        function createCache() {
            const newCache = new Array(maximumPage);
            for (let i = 0; i < maximumPage ; i++) {
                const currentAddress = props.data[i].pool.toLowerCase();
                // see which name of the pool it is 
                newCache[i] = poolObject[currentAddress];
            }
            setCache(newCache);

        }

        createCache();

    }
    ,[]);

    useEffect(() => {
        const updateData = () => {
            setPool(props.data[page]);
        }

        updateData();
    }, [page]);



    // calculate the change in rates over a certain ... time 

    if (props.data.length == 0) { //check if any data is present at all 
        return <div className="waitingForConnection">Loading...</div>;
      } else 
    return (
      <>
        <div className="wrapper">
            <div className = "bodyWrapper">
                <div className = "left">
                    <button className="button button_left" disabled = {page <= 0} onClick = {() => setPage(page - 1)}>
                    <Image src = {`https://res.cloudinary.com/djev64cqn/image/upload/v1656148594/chevron-left_pozygn.png`} alt = "chevron" width = "60" height = "60" />
                    </button>
                </div>
                <div className = "center">
                    <div className = "tileHeader">
                        <span className = "tileHeader">
                            GLTR STAKING
                        </span>

                    </div>

                    <div className = "dataContainerv2">
                        <div className = "mainDatav2">
                            <div className = "heading">
                                <span className = "heading_Name">TOTAL STAKED:</span>
                            </div>
                            <div className = "tileTitle_wrapper">
                                <span className = "tileTitle">{`${cache[page]}`}</span>
                            </div>
                        </div>
                        <div className = "circularBarWrapperv2">
                            <CircularProgressbar 
                            value = {pool.percentageStaked} 
                            text= {`${pool.percentageStaked.toFixed(2)}%`}
                            styles = {buildStyles({
                              strokeLinecap: "flat",
                              pathTransitionDuration: 0.5,
                              textSize: '25px',
                              textColor: "black",
                              pathColor: "#622FEE",
                              trailColor: "#858585",
                              rotation: 0.25,
                            })}
                            />
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className = "right">
                    <button className="button button_right" disabled = {page >= maximumPage - 1} onClick = {() => setPage(page + 1)}>
                    <Image src = {`https://res.cloudinary.com/djev64cqn/image/upload/v1656148601/chevron-right_qraw6n.png`} alt = "chevron" width = "60" height = "60" />
                    </button>
                </div>
            </div>

        </div>
        <style jsx>
          {`
            .center {

                height: 100%;
                display: flex;
                flex-direction: column;

                flex: 4;
            }

            .heading {
                margin-bottom: 15px;
            }

            .tileHeader {
                font-size: 32px;
                font-weight: 800;
                font-style: normal;
                text-transform: uppercase;

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
                height: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                
            }

            .heading_Name {
              font-size: 32px;
              line-height: 29px;
              font-weight: 400;
              
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
                width: 100%;
                padding-bottom: 10px;
                
            }

            .circularBarWrapperv2{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 199px;
                height: 199px;


                
                
            }
            .wrapper {

              display: flex;
              color: black;
              background: white;
              width: 100%;
              height: 100%;
              border: 1px solid black;


              
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

              width: 70px;
              margin: 2px;
              background: white;
              border: none;
              text-align: center;
              color: #04b6bc;
              height: 50px;
              padding: 5px;
            }

            .button_left:hover {
              transform: translateX(10px);
              transition: 0.2s ease-in-out;
            }

            .button_right:hover {
              transform: translateX(-10px);
              transition: 0.5s ease-in-out;
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
  
  export default PoolsUnflippedV2;