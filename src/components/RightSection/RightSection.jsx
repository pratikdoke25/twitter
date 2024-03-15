import SearchIcon from '@mui/icons-material/Search';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SubscriptionModal from '../SubscriptionModal/SubscriptionModal';

const RightSection = () => {
    const handleChangeTheme = () => {
        console.log("handle change theme");
    };

    return (
        <div className="py sticky top-3">
            <div className="relative flex items-center">
                <div className="absolute top-2 left-0 pl-3 pt-3">
                    <SearchIcon className='text-[#1d9bf0]' />
                </div>
                <input
                    type="text"
                    className="appearance-none mt-3 bg-gray-200 focus:bg-white border border-gray-300 rounded-full py-3 px-12 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-full"
                    placeholder="Search"
                />
                <Brightness6Icon className='ml-3 cursor-pointer mt-4' onClick={handleChangeTheme} />
            </div>
            <section className='my-5'>
                <h1 className='text-xl font-bold'>Get verified</h1>
                <h1 className='my-2 font-bold'>Subscribe to unlock new features</h1>
                <Button variant='contained' sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}>
                    Get Verified
                </Button>
            </section>
            <section>
    <h1 className="font-bold text-xl py-1">Whats happening</h1>
    <div className='flex flex-col w-full'>
        {[1,1,1,1,1].map((item, index) => (
            <div key={index} className='flex justify-between w-full mb-4'>
                <div>
                    <p>Trending in India</p>
                    <p className='font-bold'>#DhruvRathee</p>
                    <p>27.7K posts</p>
                </div>
                <MoreHorizIcon/>
            </div>
        ))}
    </div>
</section>
{/* <section>
    <SubscriptionModal />
</section> */}
        </div>
    );
};

export default RightSection;
