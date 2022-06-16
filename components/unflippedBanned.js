import Image from 'next/image';



function UnflippedBanned() {


  return (
    <>
      <div className = "widget">
        <div className = "left">
          <span className = "title">USERS</span>
          <span className = "counter">21312</span>
          <span className = "link">See all users</span>
        </div>
        <div className = "right">
          <div className = "percentage">
            <div>Arrow up icon</div>
            20%
          </div>
          <div className = "image__Wrapper">
            <Image 
            src = "/../public/images/banned.png" 
            alt = "banned" 
            height = {100} 
            width = {100} 
            borderRadius = {50}
            />
          </div>
        </div>

        
      </div>
      <style jsx>
        {`
            .wrapper {
              width: 100%;
              display: flex;
              color: #04b6bc;
              box-sizing: border-box;
              -webkit-box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
              box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
              border-radius: 10px;
              height: 270px;
              

BCFF
              
            }

            .widget {
              display: flex;
              justify-content: space-around;
              flex: 1;
              background: #673AB7;  /* fallback for old browsers */
              background: -webkit-linear-gradient(to right, #512DA8, #673AB7);  /* Chrome 10-25, Safari 5.1-6 */
              background: linear-gradient(to right, #512DA8, #673AB7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
               

              padding: 10px;
              -webkit-box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
              box-shadow: 0px 0px 7px 0px rgba(234, 135, 255, 0.92);
              border-radius: 10px;
              height: 200px;
            }

            .left {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              font-size: 20px;
              color: #59BCFF;
            }

            .counter {
              font-weight: 300;
              font-size: 35px;
            }

            .right {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              color: #59BCFF;
            }

            .title {
              font-weight: bold;
              font-size: 30px;
              color: #59BCFF;
            }

            .image__Wrapper {
              border-radius: 50%;
              overflow: hidden;
            }

        `}
      </style>
    </>
  )
}

export default UnflippedBanned;