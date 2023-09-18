import {AiOutlineArrowUp , AiOutlineArrowDown} from 'react-icons/ai'

type props = {
  title : string,
    value : number,
    percentage : string,
    icon : string,
    color : string
}

const DataComponent : React.FC<props> = (props) => {
    return ( 
        <div className="bg-white w-[22%] flex flex-col justify-start items-start pl-3 pt-3 rounded-md">
            <div className="text-black font-bold text-lg">{props.title}</div>
            <div className="pt-3 pb-3 text-2xl font-bold text-black"> {props.value}</div>
            <div className="pt-3 pb-3 text-sm flex gap-1"> <span className={
                props.icon === "AiOutlineArrowUp" ? "text-[#009289]" : "text-[#E29578]"
            }>{props.percentage}</span> <span className={
                props.icon === "AiOutlineArrowUp" ? "text-[#009289]" : "text-[#E29578]"
            }> {
                props.icon === "AiOutlineArrowUp" ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />
            }</span> This week</div>
        </div>
     );
}
 
export default DataComponent;