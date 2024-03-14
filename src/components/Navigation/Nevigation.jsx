import React from "react";
import { navigationMenu } from "./NavigationMenu"
import { useNavigate } from "react-router-dom"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Menu, MenuItem ,Avatar} from '@mui/material';
import virat from '../../assets/images/virat.jpeg';
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

          <Avatar
            alt="username"
            src={virat} />
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