
import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';


const poolObject = {
    "0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4" : "GHST_USDC", 
    "0xf69e93771f11aecd8e554aa165c3fe7fd811530c" : "GHST_MATIC",
    "0xb0e35478a389dd20050d66a67fb761678af99678" : "GHST_GLTR", 
    "0xbfad162775ebfb9988db3f24ef28ca6bc2fb92f0":  "GHST_KEK", 
    "0xc765eca0ad3fd27779d36d18e32552bd7e26fd7b" : "GHST_ALPHA",
    "0x641ca8d96b01db1e14a5fba16bc1e5e508a45f2b" : "GHST_FOMO",
    "0xfec232cc6f0f3aeb2f81b2787a9bc9f6fc72ea5c" : "GHST_FUD", 
    "0x73958d46b7aa2bc94926d8a215fa560a5cdca3ea" : "WAP_GHST",

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
                    <button className="button" disabled = {page <= 0} onClick = {() => setPage(page - 1)}>
                    <Image src = {`/../public/images/chevron-left.png`} alt = "chevron" width = "40" height = "40" />
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
                                <span>Total Staked:</span>
                            </div>
                            <div className = "tileTitle_wrapper">
                                <span className = "tileTitle">{`${cache[page]}`}</span>
                            </div>
                        </div>
                        <div className = "circularBarWrapperv2">
                            <CircularProgressbar value = {pool.percentageStaked} text= {`${pool.percentageStaked.toFixed(2)}%`}/>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className = "right">
                    <button className="button" disabled = {page >= maximumPage - 1} onClick = {() => setPage(page + 1)}>
                    <Image src = {`/../public/images/chevron-right.png`} alt = "chevron" width = "40" height = "40" />
                    </button>
                </div>
            </div>


          {/* <div className="bodyItem">
            <div className = "bodyWrapper">
                <div className = "dataWrapper"> 
                    <span className="tileTitle">
                      {`${cache[page]}`}
                    </span>
                    <span>
                      hello
                    </span>

                    <div className="dataContainer">
                        
                        <span className="mainData">
                            { `${pool.percentageStaked.toFixed(2)}%` }
                        </span>
                    </div>
                </div>
                <div className = "circularBarWrapper">
                    <CircularProgressbar value = {pool.percentageStaked} text= {"Staked"} />
                </div>
                
            </div>
            <div className="buttons">
                <button className="button" disabled = {page <= 0} onClick = {() => setPage(page - 1)}>
                  <Image src = {`/../public/images/chevron-left.png`} alt = "chevron" width = "40" height = "40" />
                </button>

                <button className="button" disabled = {page >= maximumPage - 1} onClick = {() => setPage(page + 1)}>
                  <Image src = {`/../public/images/chevron-right.png`} alt = "chevron" width = "40" height = "40" />
                </button>

            </div>
          </div> */}
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
                font-size: 30px;
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
                width: 80%;
                height: 100%;

                
                
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
              background: #000000;  
              background: -webkit-linear-gradient(to right, #434343, #000000);  
              background: linear-gradient(to right, #434343, #000000); 

              
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
  
  export default PoolsUnflippedV2;