




function AlchemicaCard(props) {


    return(
        <>
            <div className = "wrapper">
                
                
                <div className = "title">
                    <span className = "title_main">ALCHEMICA SPENT</span>
                    <span className = "title_subheading">{props.title}</span>
                </div>
                <div className = "content">
                    Hello world
                </div>
            </div>

            <style jsx>


                {`

                .wrapper {
                    width: 100%;
                    height: 100%;
                    border: 1px solid black;
                }

                .title_main {

                    text-align: center;
                    padding-top: 5px;
                    font-weight: 400;
                    font-size: 32px;
                    line-height: 29.73px;
                }

                .title_subheading {
                    text-align: center;
                    font-size: 28px;
                    font-weight: 400;
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