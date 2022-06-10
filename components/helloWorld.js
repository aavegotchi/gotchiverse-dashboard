


function HelloWorld(props) {
    console.log("mounted");
    return (
        <>
            <div className = "wrapper">
                <div className = "topBar">
                    <div className = "left">Alchemica Minted</div>
                    <div className = "right">Total Supply</div>
                </div>
                <div className = "cardBody">
                    <div className = "display">{props.activeWallets}</div>
                    <div className = "bottom">
                        <div className = "button leftSide">See more</div>
                        <div className = "rightSide"></div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                .bottom {
                    display: flex;
                }
                .leftSide {
                    flex: 2;
                }

                .rightSide {
                    flex: 6;
                }
                .topBar {
                    display: flex;
                }
                .left {
                    flex: 5;
                    text-align: center;
                }
                .right {
                    flex: 5;
                    text-align: center;
                }
                .cardBody {
                    text-align:center;
                }

                .button {
                    color: #622FEE;
                    background: #04B6BC;
                    height: 30px;
                    
                }

                .wrapper {
                    padding: 1.5rem;
                    background: linear-gradient(
                        hsl(0 0% 0% /0),
                        hsl(0 0% 0% / 0.8)
                    );
                    height: 200px;

                }
                `}
            </style>
        </>
    )
}

export default HelloWorld;