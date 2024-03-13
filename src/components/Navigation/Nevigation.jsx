import React from "react";
import { navigationMenu } from "./NavigationMenu"
import { useNavigate } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Menu, MenuItem } from '@mui/material';
const Nevigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const nevigate = useNavigate()
  return (
    <div className="h-screen  top-0">
      <div>
        <div className="py-5">
          <svg height="30" width="30" viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item, index) =>
            <div key={index} className="cursor-pointer flex space-x-3 items-center
    " onClick={() => item.title === "profile" ? nevigate(`/profile/${6}`) : nevigate(item.path)}>
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          )}
        </div>
        <div className="py-10">
          <div className="w-full rounded-3xl py-3 px-3 mr-6 bg-sky-400 text-white text-center font-medium text-base border border-white cursor-pointer">
            Post
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">

          <AccountCircleIcon
            alt="username"
            src="data:image/jpeg;base64,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" />
          <div>
            <div>
              <span>Pratik Doke</span>
            </div>
            <div>
              <span className="opacity-70">@impratikdoke</span>
            </div>
          </div>
          <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
             <MoreHorizIcon />
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
  )
}

export default Nevigation