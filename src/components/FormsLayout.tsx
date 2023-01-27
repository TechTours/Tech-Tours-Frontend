import React from "react";

const FormsLayout : React.FC = (props) => {
    return ( 
        <div className="w-[100vw] bg-red-200 flex flex-row ">
            <div className="w-[50%] flex bg-blue-200 justify-center items-center h-[100vh]">
              <props.formComponent />
            </div>

            <div className="w-[50%] flex bg-green-200  justify-center items-center h-[100vh]">
              <props.sideBarComponent />
            </div>
        </div>
     );
}
 
export default FormsLayout;