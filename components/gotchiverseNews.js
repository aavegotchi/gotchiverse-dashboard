import { useState, useRef } from "react";




function GotchiverseNews () {

    const [currentTab, setCurrentTab] = useState('news');
    


    function addClassName(domElement) {
        domElement.classList.add("selected");

    }


// I can say events, news, announcements, updates, 



    return (
        <>
            <div className = "wrapper">
                <div className = "header">
                    <div className = "header__ news" onClick = {(event) => {
                        // console.log(event.target);
                        addClassName(event.target);
                        
                    }}>News </div>
                    <div className = "header__ events">Events</div>
                    <div className = "header__ notices">Notices</div>
                    <div className = "header__ updates">Updates</div>
                </div>
                <div className = "mainBody">
                    <ul>
                        <li>
                            <a href = "https://www.google.com/">
                                <span>08.06</span>
                                This is a newsasdasdasdasdasdasdasdasdasdasdasdasdasd
                            </a>
                        </li>
                        <li>
                            <a href = "https://www.google.com/">
                                <span>08.06</span>
                                This is a newsasdasdasdasdasdasdasdasdasdasdasdasdasd
                            </a>
                        </li>
                        <li>
                            <a href = "https://www.google.com/">
                                <span>08.06</span>
                                This is a newsasdasdasdasdasdasdasdasdasdasdasdasdasd
                            </a>
                        </li>
                        <li>
                            <a href = "https://www.google.com/">
                                <span>08.06</span>
                                This is a newsasdasdasdasdasdasdasdasdasdasdasdasdasd
                            </a>
                        </li>
                        <li>
                            <a href = "https://www.google.com/">
                                <span>08.06</span>
                                This is a newsasdasdasdasdasdasdasdasdasdasdasdasdasd
                            </a>
                        </li>
                    </ul>
                </div>


            </div>


            <style jsx>
                {`
                    .wrapper {
                        box-sizing: border-box;

                        height: 100%;
                        color: #04b6bc;
                        width: 100%;
                        -webkit-box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
                        box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
                        border-radius: 10px;
                        
                    }
                    .header {
                        display: flex;
                        justify-content: space-around;
                        height: 50px;
                        
                        
                        
                    }

                    .header__ {
                        display: inline-block;
                        flex: 1;
                        text-align: center;
                        padding: 2px;
                        padding-top: 12px;
                        cursor: pointer;
                        border-radius: 10px 10px 0 0 ;
                    }

                    .mainBody {
                        padding-top: 30px;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        align-content: center;
                        justify-content: center;
                        overflow: hidden;
                    }

                    li {
                        

                        width: 300px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        margin-bottom: 8px;
                        
                    }

                    .selected {
                        
                        color: white;
                    }

                    
                `}

            </style>
        </>
    )
}



export default GotchiverseNews;