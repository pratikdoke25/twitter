import React from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Button, Menu, MenuItem, Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import virat from '../../assets/images/virat.jpeg';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; // Added import for MoreHorizIcon

const TweetCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <div className="">
      <div className='flex space-x-5'>
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          alt="username"
          className='cursor-pointer'
          src={virat}
        />
        <div className='w-full'>
          <div className='flex justify-between items-center'>
            <div className='flex cursor-pointer items-center space-x-2'>
              <span className='font-semibold'>
                Pratik Doke
              </span>
              <span className='text-gray-600'>@pratikdoke  . 2m</span>
              <VerifiedIcon className='text-[#1d9bf0]' />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon /> {/* Added MoreHorizIcon component */}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
