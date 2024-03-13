import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PendingIcon from "@mui/icons-material/Pending";

export const navigationMenu = [
    {
        title: "Home",
        icon: React.createElement(HomeIcon),
        path: "/home"
    },
    {
        title: "Explore",
        icon: React.createElement(ExploreIcon),
        path: "/explore"
    },
    {
        title: "Notification",
        icon: React.createElement(NotificationsNoneIcon),
        path: "/notification"
    },
    {
        title: "Messages",
        icon: React.createElement(MessageIcon),
        path: "/messages"
    },
    {
        title: "Lists",
        icon: React.createElement(ListAltIcon),
        path: "/list"
    },
    {
        title: "Communities",
        icon: React.createElement(GroupIcon),
        path: "/communities"
    },
    {
        title: "Verified",
        icon: React.createElement(VerifiedIcon),
        path: "/verified"
    },
    {
        title: "Profile",
        icon: React.createElement(AccountCircleIcon),
        path: "/profile"
    },
    {
        title: "More",
        icon: React.createElement(PendingIcon),
        path: "/more"
    }
];
