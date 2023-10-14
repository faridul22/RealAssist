import logo from '../../assets/Realassistai_Logo.png'

const Header = () => {
    return (
        <div className="w-[570px] my-[8px] h-[26px]">
            <div className='flex'>
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <h1 className='font-black text-[9px]'>123 Main Street, Dover, NH 03820-4667</h1>
                </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-300 h-[2px] mt-1"></div>

        </div>
    );
};

export default Header;