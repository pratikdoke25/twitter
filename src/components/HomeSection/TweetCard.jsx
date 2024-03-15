import React from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Button, Menu, MenuItem, Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import virat from '../../assets/images/virat.jpeg';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; // Added import for MoreHorizIcon
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBorder } from '@mui/icons-material';
import ReplyModal from './ReplyModal';
import {useState} from 'react'
const TweetCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openReplyModal, setOpenReplyModal] = useState(false);
  const handleOpenReplyModel = () => setOpenReplyModal(true);
  const handleCloseReplayModel = () => setOpenReplyModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteTweet = () => {
    console.log("delete tweet");
    handleClose();
  }

  const handleCreateRetweet = () => {
    console.log("create retweet");
  }

  const handleLikeRetweet = () => {
    console.log("handle like tweet");
  }
  const navigate = useNavigate();

  return (
    <React.Fragment>
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

                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div className='mt-2'>
            <div onClick={()=>navigate(`/tweet/${8}`)} className='cursor-pointer' >
              <p className='mb-2 p-0'>Hi i am on twitter.my name is pratik</p>
              <img className='w-[28rem] border border-gray-400 p-5 rounded-md'
                src={virat} alt="viratimage" />
            </div>
            <div className='py-5 flex-wrap justify-between items-center'>
              <div className='space-x-5 flex items-center text-gray-600'>
                <ChatBubbleOutlineIcon className='cursor-pointer ' onClick={handleOpenReplyModel} />
                <p>45</p>
                <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-5 flex items-center`}>
                <RepeatIcon
                  onClick={handleCreateRetweet}
                  className='cursor-pointer' />
                <p>50</p>
              </div>
              <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-5 flex items-center`}>
                {true ? <FavoriteIcon
                  onClick={handleLikeRetweet}
                  className='cursor-pointer' /> : <FavoriteBorder
                  onClick={handleLikeRetweet}
                  className='cursor-pointer' />}
                <p>50</p>
              </div>
              <div className='space-x-5 flex items-center text-gray-600'>
                <BarChartIcon className='cursor-pointer ' onClick={handleOpenReplyModel} />
                <p>450</p>
              </div>
              <div className='space-x-5 flex items-center text-gray-600'>
                <FileUploadIcon className='cursor-pointer ' onClick={handleOpenReplyModel} />
                <p>45</p>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <section>
      <ReplyModal open={openReplyModal} handleClose={handleCloseReplayModel} />
      </section>
    </React.Fragment>
  );
}

export default TweetCard;
