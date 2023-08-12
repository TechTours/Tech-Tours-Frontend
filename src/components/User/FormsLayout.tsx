import React from "react";

type props = {
  sideBarComponent : React.FC,
  formComponent : React.FC
}

const FormsLayout : React.FC<props> = (props) => {
    return ( 
        <div className="w-[100vw] bg-red-200 flex flex-row ">
            <div className="lg:w-[50%] flex bg-blue-200 justify-center items-center h-[100vh] msm:w-[100%] sm:w-[60%]">
              <props.formComponent />
            </div>

            <div className="lg:w-[50%] lg:flex bg-green-200  justify-center items-center h-[100vh] msm:hidden sm:w-[40%] sm:flex ">
              <props.sideBarComponent />
            </div>
        </div>
     );
}
 
export default FormsLayout;