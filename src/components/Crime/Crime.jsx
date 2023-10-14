import MainChart from "../MainChart/MainChart";
import crime from '../../assets/Crime.png'

const Crime = () => {
    return (
        <div>
            {/* Chart */}
            <div >
                <div className="m-2">
                    <div className='flex justify-center items-center'>
                        <img src={crime} alt="" />
                        <hr className="col-span-8 w-full bg-gradient-to-r from-blue-500 to-cyan-300 h-[2px] mt-1" />
                    </div>
                    <MainChart></MainChart>
                </div>
            </div>
        </div>
    );
};

export default Crime;