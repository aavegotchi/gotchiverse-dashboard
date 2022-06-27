import Image from "next/image";
import React from "react";
import { useState } from "react";

function UnflippedBanned({ title, data }) {
  const [timeLine, setTimeLine] = useState(24);

  return (
    <>
      <div className="widget">
        <div className="buttons">
          <button
            className="button"
            disabled={timeLine == 24}
            onClick={() => setTimeLine(24)}
          >
            24 h
          </button>
          <button
            className="button"
            disabled={timeLine == 7}
            onClick={() => setTimeLine(7)}
          >
            7 d
          </button>
          <button
            className="button"
            disabled={timeLine == 30}
            onClick={() => setTimeLine(30)}
          >
            30 d
          </button>
        </div>
        <span className="title">{title}</span>
        <div className="data">
          <span className="counter">{data}</span>
        </div>
        <div className="changes">
          <div className="percentage">
            <div>
              <Image
                src={`https://res.cloudinary.com/djev64cqn/image/upload/v1655320547/trending-up_aryatl.png`}
                alt="trending"
                width="62"
                height="55"
              />
            </div>
            <span className="percentageWeightage">20%</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .data {
            font-size: 32px;
            line-height: 29.73px;
            font-weight: 400;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .percentage {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;
          }

          .percentageWeightage {
            font-weight: 400;
            font-size: 32px;
            line-height: 29px;
            margin-left: 5px;
          }

          .widget {
            display: flex;
            flex-direction: column;

            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 290px;
            background: white;
            border: 1px solid #000000;
          }

          .buttons {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .button {
            box-sizing: border-box;
            width: 65px;
            height: 45px;
            flex: 1;
            margin: 5px;
            color: black;
            background: #b8b8b8;
            border: 1px solid #111111;
            box-shadow: 4px 4px 0px #000000;
            text-align: center;
            text-align: center;
            color: black;
            font-size: 22px;
            line-height: 20.44px;
            font-weight: 400;
            transition: 0.5s;
            padding: 2px;
          }
          button:hover {
            background: #04b6bc;
            color: #6d18f8;
            transition: 0.2s ease-in-out;
          }

          .button:disabled {
            background-color: #cf15f9;
            pointer-events: none;
            color: white;
          }

          .counter {
            font-weight: 400;
            font-size: 50px;
            line-height: 46.45px;
          }

          .title {
            color: black;
            font-size: 32px;
            line-height: 29.73px;
            text-align: center;
            width: 100%;
            height: 50px;
            font-weight: 800;
          }
        `}
      </style>
    </>
  );
}

export default UnflippedBanned;
