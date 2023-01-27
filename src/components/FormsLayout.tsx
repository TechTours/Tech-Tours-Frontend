import React from "react";

type props = {
  sideBarComponent : React.FC,
  formComponent : React.FC
}

const FormsLayout : React.FC<props> = (props) => {
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