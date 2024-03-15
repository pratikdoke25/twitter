import { useNavigate } from 'react-router-dom';
import virat from '../../assets/images/virat.jpeg';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Avatar, Button, Box, Tab,} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {TabPanel,TabContext,TabList} from '@mui/lab';
import { useState } from 'react';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModal from './ProfileModal';

const Profile = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    const [tabValue, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue === 4){
            console.log("likes Tweet");
        }
        else if(newValue === 1){
            console.log("User Tweet");
        }
    };

    const handleOpenProfileModel = () => {
        console.log("open edit modal");
    };

    const handleFollowUser = () => {
        console.log("handle follow modal");
    };

    return (
        <div>
            <section className="z-50 flex items-center sticky top-0 bg-opacity-95">
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-95 ml-5'>Pratik DOke</h1>
            </section>
            <section>
                <img className='w-full h-[350px] object-cover' src="https://cdn.pixabay.com/photo/2024/01/15/04/30/woman-8509281_640.jpg" alt="" />
            </section>
            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar className='transform -translate-y-24'
                        alt="virat" src={virat} sx={{ width: "10rem", height: "10rem", border: "4px solid white" }} />
                    {true ? (
                        <Button
                            onClick={handleOpenProfileModel}
                            variant='contained'
                            sx={{ borderRadius: "20px" }}>
                            Edit Profile
                        </Button>
                    ) : (
                        <Button
                            onClick={handleFollowUser}
                            variant='contained'
                            sx={{ borderRadius: "20px" }}>
                            {true ? "Follow" : "unfollow"}
                        </Button>
                    )}
                </div>
                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-lg'>Pratik Doke</h1>
                        {true ? <VerifiedIcon /> : null}
                    </div>
                </div>
                <h1 className='text-gray-500'>@pratikdoke</h1>
                <div className='mt-2 space-y-3'>
                    <p>Helllo , i am pratik doke</p>
                    <div className='py-1 flex space-x-5'>
                    <div className='flex items-center text-gray-500'>
                            <BusinessCenterIcon />
                            <p className='ml-2'>Education</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon />
                            <p className='ml-2'>India</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <CalendarMonthIcon />
                            <p className='ml-2'>Join June 2022</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                            <div className='flex items-center space-x-1 font-semibold'>
                            <span>90</span>
                            <span className='text-gray-500'>Folllowing</span>
                            </div>
                            <div className='flex items-center space-x-1 font-semibold'>
                            <span>500</span>
                            <span className='text-gray-500'>Followers</span>
                            </div>
                    </div>
                </div>
            </section>
            <section className='py-5'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Posts" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
    {[1, 1, 1, 1, 1].map((item, index) => (
        <TweetCard key={index} />
    ))}
</TabPanel>
        <TabPanel value="2">User Replies</TabPanel>
        <TabPanel value="3">User Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
            </section>
            <section>
                <ProfileModal />
            </section>
        </div>
    );
};

export default Profile;
