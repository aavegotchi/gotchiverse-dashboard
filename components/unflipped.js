import Image from 'next/image'




function UnflippedTile(props) {
    if (props.data == undefined) {
      return <div className="waitingForConnection">Loading...</div>;
    }

    // calculate the change in rates over a certain ... time 

  
    return (
      <>
        <div className="wrapper">
          <div className="bodyItem">
            <span className="tileTitle">{props.title}</span>
            <div className="dataContainer">
              <span className="mainData">
                {props.data}
              </span>
              <span className="dataChanges negative">
                -10% {/* -10%  change this to the calculated change over time */}
              </span>
            </div>
            <div className="buttons">
              <div className="bottomLeft">
                <div className="button time">24h</div>
                <div className="button time">7d</div>
                <div className="button time">30d</div>
              </div>
              <div className="bottomRight">
                <div className="button graph">See detailed graph</div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .wrapper {
              width: 100%;
              display: flex;
              color: #04b6bc;
            }
  
            .bodyItem {
              flex: 1;
              margin: 0px 20px;
              padding: 30px;
              border-radius: 10px;
              cursor: pointer;
              -webkit-box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
              box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
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
            }
            .bottomLeft {
              flex: 4;
              display: flex;
            }
            .bottomRight {
              flex: 4;
            }
  
            .button {
              margin: 2px;
              background: #6d18f8;
              text-align: center;
              border-radius: 5px;
              color: #04b6bc;
            }
  
            .button:hover {
              background: #04b6bc;
              color: #6d18f8;
              transition: 0.2s ease-in-out;
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