import { IProvidedProps } from 'google-maps-react';
import React, { ComponentType, ReactElement } from 'react';
import {BiUserCircle} from 'react-icons/bi'
import { Map, GoogleApiWrapper, IMapProps ,  } from 'google-maps-react';

type GoogleApiWrapper = <Props extends IMapProps>(
    WrappedComponent: React.ComponentType<Props>
  ) => React.ComponentType<Omit<Props, keyof IMapProps>>;

interface MapContainerProps extends IMapProps {
    google: any;
  } 

type props = {
    header : React.FC,
    footer : React.FC,
    map : React.FC<MapContainerProps>,
    navigation : React.FC
}

const HomeLayout : React.FC<props> = (props) => {
    return ( 
         <div className="w-[100%] flex flex-col items-center overflow-x-hidden">
            <div>
                <props.header />
            </div>
            <div className='flex flex-row w-[92%] mt-3'>
                <div className='flex w-[80%] justify-center items-center bg-pink-300'>
                    <props.map />
                </div>
                <div className='flex w-[20%] justify-center items-center'>
                    <props.navigation />
                </div>
            </div>
            <div> 
                <props.footer />
            </div>
         </div>
     );
}
 
export default HomeLayout;