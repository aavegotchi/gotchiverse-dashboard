import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';


function LastSold() {


    return (
        <>
            <div className = "widgetSm">
                <span className = "widgetSmTitle">Gotchis last sold</span>
                <ul className = "widgetSmList">
                    <li className = "widgetSmListItem">
                        
                        <Image src = "https://res.cloudinary.com/djev64cqn/image/upload/v1655418530/gotchiparent_cahkbc.png"
                        alt = "gotchi"
                        height = {90}
                        width = {90}
                        objectFit = "cover"
                        />
                        
                        <div className = "widgetSmUser">
                            <span className = "widgetSmUsername">JackTheRipper</span>
                            <span className = "widgetSmUserTitle">#h123xcasdg</span>
                        </div>
                        <button className = "widgetSmButton">
                            <SearchIcon />
                            See bazaar
                        </button>
                        
                    </li>
                    <li className = "widgetSmListItem">

                        <Image src = "https://res.cloudinary.com/djev64cqn/image/upload/v1655418530/gotchiparent_cahkbc.png"
                        alt = "gotchi"
                        height = {90}
                        width = {90}
                        objectFit = "cover"
                        
                        />

                        <div className = "widgetSmUser">
                            <span className = "widgetSmUsername">Heracles</span>
                            <span className = "widgetSmUserTitle">#213123123</span>
                        </div>
                        <button className = "widgetSmButton">
                            <SearchIcon />
                            See bazaar
                        </button>
                        
                    </li>
                    <li className = "widgetSmListItem">
                        <Image src = "https://res.cloudinary.com/djev64cqn/image/upload/v1655418530/gotchiparent_cahkbc.png"
                        alt = "gotchi"
                        height = {90}
                        width = {90}
                        objectFit = "cover"
                        />
                        <div className = "widgetSmUser">
                            <span className = "widgetSmUsername">LinkedList</span>
                            <span className = "widgetSmUserTitle">InvertBinaryTree</span>
                        </div>
                        <button className = "widgetSmButton">
                            <SearchIcon />
                            See bazaar
                        </button>
                        
                    </li>
                </ul>
            </div>
            <style jsx>
                {`
                .widgetSm {
                    width: 100%;
                    text-align: center;
                    
                }

                .widgetSmTitle {
                    font-size: 32px;
                    font-weight: 600;


                
                }

                .widgetSmImg {
                    font: 40px;
                    height: 40px;

                    border-radius: 50%;
                    object-fit: cover;
                    z-index: 0;
                }

                .widgetSmList {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }

                .widgetSmListItem {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    margin: 20px 0px;
                }

                .widgetSmUser {
                    display: flex;
                    flex-direction: column;
                    width: 120px;
                    text-align: left;
                    
                    
                }

                .widgetSmUsername {
                    font-weight: 600;
                    font-size: 25px;
                }

                .widgetSmUserTitle {
                    font-weight: 300;
                    font-size: 20px;
                }

                .widgetSmButton {
                    display: flex;
                    align-items: center;
                    border: none;
                    border-radius: 10px;
                    padding:  7px 10px;
                    background: pink;
                }





                `}
                
            </style>
        
        </>
    )
}


export default LastSold;