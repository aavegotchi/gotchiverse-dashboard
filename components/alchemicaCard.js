// importing states 

import { useState , useEffect} from 'react';


//importing modules 
import Image from "next/image";




function AlchemicaCard(props) {


    //max Number constant here 
    const maxNumberLength = 5;


    // coin data with their respective suffixes 
    const [FUDData, setFUDData] = useState(0);
    const [FUDSuffix, setFUDSuffix] = useState(0);



    const [FOMOData, setFOMOData] = useState(0);
    const [FOMOSuffix, setFOMOSuffix] = useState(0);


    const [ALPHAData, setALPHAData] = useState(0);
    const [ALPHASuffix, setALPHASuffix] = useState(0);


    const [KEKData, setKEKData] = useState(0);
    const [KEKSuffix, setKEKSuffix] = useState(0);


    //on mount load data 
    useEffect(() => {
        setFUDData(props.data[0].length > maxNumberLength? props.data[0].slice(0, maxNumberLength) : props.data[0]);
        setFUDSuffix(props.data[0].length > maxNumberLength ? props.data[0].length - maxNumberLength: 0);
        

        setFOMOData(props.data[1].length > maxNumberLength? props.data[1].slice(0, maxNumberLength) : props.data[1]);
        setFOMOSuffix(props.data[1].length > maxNumberLength ? props.data[1].length - maxNumberLength: 0);

        setALPHAData(props.data[2].length > maxNumberLength? props.data[1].slice(0, maxNumberLength) : props.data[2]);
        setALPHASuffix(props.data[2].length > maxNumberLength ? props.data[2].length - maxNumberLength: 0);

        setKEKData(props.data[3].length > maxNumberLength? props.data[1].slice(0, maxNumberLength) : props.data[3]);
        setKEKSuffix(props.data[3].length > maxNumberLength ? props.data[3].length - maxNumberLength: 0);


    }, [props]);

    
    return(
        <>
            <div className = "wrapper">
                
                
                <div className = "title">
                    <span className = "title_main">ALCHEMICA SPENT</span>
                    <span className = "title_subheading">{props.title}</span>
                </div>
                <div className = "content">
                    <div className = "list_Container">
                        <ul>
                            <li className = "list">
                                <div className = "alchemicaCoin">
                                    <div className = "coinWrapper">
                                        <Image 
                                        src = {`https://res.cloudinary.com/djev64cqn/image/upload/v1655891215/FUD_sferaj.png`} 
                                        alt = "alchemicaCoin" 
                                        width = "40" 
                                        height = "40" 
                                        />
                                    </div>
                                    <span className = "coinName">FUD</span>
                                </div>
                                {FUDSuffix > 0 ? 
                                <span className = "mainData">{ FUDData > 0 ? 
                                    <div>
                                    {`${FUDData} x10`}
                                    <span className = "suffixData">{FUDSuffix}</span>
                                    </div>
                                    : 
                                    <div>Loading...</div> }
                                    </span>
                                :
                                <span className = "mainData">{FUDData > 0 ? <span>{`${FUDData}`}</span> : <div>Loading...</div>}</span>
                                }
                                
                                
                            </li>
                            <li className = "list">
                                <div className = "alchemicaCoin">
                                    <div className = "coinWrapper">
                                        <Image 
                                        src = {`https://res.cloudinary.com/djev64cqn/image/upload/v1655891225/FOMO_jfucjs.png`} 
                                        alt = "alchemicaCoin" 
                                        width = "40" 
                                        height = "40" 
                                        />
                                    </div>
                                    <span className = "coinName">FOMO</span>
                                </div>
                                {FOMOSuffix > 0 ? 
                                <span className = "mainData">{ FOMOData > 0 ? 
                                    <div>
                                    {`${FOMOData} x10`}
                                    <span className = "suffixData">{FOMOSuffix}</span>
                                    </div>
                                    : 
                                    <div>Loading...</div> }
                                    </span>
                                :
                                <span className = "mainData">{FOMOData > 0 ? <span>{`${FOMOData}`}</span> : <div>Loading...</div>}</span>
                                }
                            </li>
                            <li className = "list">
                                <div className = "alchemicaCoin">
                                    <div className = "coinWrapper">
                                        <Image 
                                        src = {`https://res.cloudinary.com/djev64cqn/image/upload/v1655891221/ALPHA_qybrg7.png`} 
                                        alt = "alchemicaCoin" 
                                        width = "40" 
                                        height = "40" 
                                        />
                                    </div>
                                    <span className = "coinName">ALPHA</span>
                                </div>
                                {ALPHASuffix > 0 ? 
                                <span className = "mainData">{ ALPHAData > 0 ? 
                                    <div>
                                    {`${ALPHAData} x10`}
                                    <span className = "suffixData">{ALPHASuffix}</span>
                                    </div>
                                    : 
                                    <div>Loading...</div> }
                                    </span>
                                :
                                <span className = "mainData">{ALPHAData > 0 ? <span>{`${ALPHAData}`}</span> : <div>Loading...</div>}</span>
                                }
                            </li>
                            <li className = "list">
                                <div className = "alchemicaCoin">
                                    <div className = "coinWrapper">
                                        <Image 
                                        src = {`https://res.cloudinary.com/djev64cqn/image/upload/v1655983165/KEK2_ujidrh.png`} 
                                        alt = "alchemicaCoin" 
                                        width = "40" 
                                        height = "40" 
                                        />
                                    </div>
                                    <span className = "coinName">KEK</span>
                                </div>
                                {KEKSuffix > 0 ? 
                                <span className = "mainData">{ KEKData > 0 ? 
                                    <div>
                                    {`${KEKData} x10`}
                                    <span className = "suffixData">{KEKSuffix}</span>
                                    </div>
                                    : 
                                    <div>Loading...</div> }
                                    </span>
                                :
                                <span className = "mainData">{KEKData > 0 ? <span>{`${KEKData}`}</span> : <div>Loading...</div>}</span>
                                }
                            </li>
                        </ul>

                    </div>
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
        </>
    )


}



export default AlchemicaCard;