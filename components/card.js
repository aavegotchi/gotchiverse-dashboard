import ChartTest from "./chartTest";
import UnflippedTile from "./unflipped";

import { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

function CardTile(props) {
    const [expanded, setExpanded] = useState(false);
    console.log("1234567", props);


    return (
        <>
            {/* <div>Hello world</div> */}
            {/* <PoolsUnflippedV2 data = {[0,1,2]} title = {props.tileTitle}/> */}
            <UnflippedTile data = {props.dataTile} title = {props.title} />
        </>

    )
}


export default CardTile;