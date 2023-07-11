// import { IProvidedProps } from 'google-maps-react';
import React, { ComponentType, ReactElement } from 'react';
import MapComponent from './MapComponent';
import {BiUserCircle} from 'react-icons/bi'
// import { Map, GoogleApiWrapper, IMapProps ,  } from 'google-maps-react';

// type GoogleApiWrapper = <Props extends IMapProps>(
//     WrappedComponent: React.ComponentType<Props>
//   ) => React.ComponentType<Omit<Props, keyof IMapProps>>;

// interface MapContainerProps extends IMapProps {
//     google: any;
//   } 

type props = {
    // header : React.FC,
    // footer : React.FC,
    // map : React.FC<MapContainerProps>,
    // navigation : React.FC
}

const HomeLayout : React.FC<props> = (props) => {
    return ( 
         <div className="w-[100%] flex flex-col items-center overflow-x-hidden">
            <div>
       <h1>My Map</h1>
       <MapComponent />
      </div>
         </div>
     );
}
 
export default HomeLayout;