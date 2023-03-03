import Footer from "../components/Footer";
import Header from "../components/Header";

type props = {
    header : React.FC,
    footer : React.FC
}

const Report: React.FC = (props) => {
    return (  
        <div className="w-[100%] flex flex-col items-center overflow-x-hidden">
        <div>
            <Header />
        </div>
        <div className='flex flex-row w-[92%] mt-3'>
            <div className='flex w-[80%] justify-center items-center bg-pink-300'>
                <props.map />
            </div>
            <div className='flex w-[20%] justify-center items-center'>
                <props.navigation />
            </div>
            Hello World
        </div>
        <div> 
            <Footer />
        </div>
     </div>
      );
}
 
export default Report;  