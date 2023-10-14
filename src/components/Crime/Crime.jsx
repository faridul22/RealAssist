
import MainChart from "../MainChart/MainChart";


const Crime = () => {
    return (
        <div className="mx-auto bg-[#F2F4F5]">
            <div className="w-full mx-auto  rounded-xl  px-5 pb-3">
                <p className='w-full bg-[#E8EEFB] rounded-t-xl'>
                    <small className='text-[#1463FF]'>Burglary</small>
                </p>
                <MainChart></MainChart>
            </div>
        </div>
    );
};

export default Crime;