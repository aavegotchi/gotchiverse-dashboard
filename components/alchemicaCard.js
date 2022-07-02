// importing states

import { useState, useEffect } from "react";

//importing modules
import Image from "next/image";
import React from "react";

function AlchemicaCard({ title, values }) {
  //max Number constant here
  const maxNumberLength = 5;

  const descriptions = [
    {
      title: "FUD",
      image:
        "https://res.cloudinary.com/djev64cqn/image/upload/v1655891215/FUD_sferaj.png",
    },
    {
      title: "FOMO",
      image:
        "https://res.cloudinary.com/djev64cqn/image/upload/v1655891225/FOMO_jfucjs.png",
    },
    {
      title: "ALPHA",
      image:
        "https://res.cloudinary.com/djev64cqn/image/upload/v1655891221/ALPHA_qybrg7.png",
    },
    {
      title: "KEK",
      image:
        "https://res.cloudinary.com/djev64cqn/image/upload/v1655983165/KEK2_ujidrh.png",
    },
  ];

  return (
    <div className="wrapper">
      <div className="title">
        <span className="title_main">ALCHEMICA SPENT ON</span>
        <span className="title_subheading">{title}</span>
      </div>
      <div className="content">
        <div className="list_Container">
          <ul>
            {descriptions.map((e, i) => (
              <li className="list" key={i}>
                <div className="alchemicaCoin">
                  <div className="coinWrapper">
                    <Image
                      src={e.image}
                      alt="alchemicaCoin"
                      width="40"
                      height="40"
                    />
                  </div>
                  <span className="coinName">{e.title}</span>
                </div>
                <span className="mainData">
                  {values[i] != undefined ? (
                    <div>{`${values[i].slice(
                      0,
                      values[i].length - 18
                    )}.${values[i].slice(-18, values[i].length - 16)}`}</div>
                  ) : (
                    <div>Loading...</div>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          .suffixData {
            font-size: 20px;
            position: relative;
            bottom: 20px;
          }

          .list {
            display: flex;
            margin-top: 20px;
            padding-left: 10px;
          }

          .mainData {
            text-align: center;
            font-size: 40px;
            line-height: 35.3px;
            font-weight: 400;

            margin-left: 20px;
          }

          .coinName {
            font-size: 18px;
            font-weight: 600;
            line-height: 13px;
            text-align: center;
          }

          .alchemicaCoin {
            display: flex;
            flex-direction: column;
          }

          .wrapper {
            width: 100%;
            height: 100%;
            border: 1px solid black;
          }

          .title_main {
            text-align: center;
            padding-top: 15px;
            font-weight: 800;
            font-size: 32px;
            line-height: 29.73px;
          }

          .title_subheading {
            text-align: center;
            font-size: 28px;
            font-weight: 800;
            line-height: 26.01px;
          }

          .title {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
}

export default AlchemicaCard;
