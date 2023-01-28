import React from 'react';
import {BiUserCircle} from 'react-icons/bi'

type props = {
    header : React.FC
}

const HomeLayout : React.FC<props> = (props) => {
    return ( 
         <div className=" h-[100vh] w-[100vw] flex flex-col items-center ">
            <div>
                <props.header />
            </div>
            <div></div>
            <div></div>
         </div>
     );
}
 
export default HomeLayout;