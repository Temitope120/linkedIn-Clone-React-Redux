import React from 'react';
import './Header.css';
import './MobileMenu.css';

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './userSlice';
import { auth } from './firebase';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function MobileMenu() {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout())
        auth.signOut();

    }
    return (
        <div>
            <div className='mobileMenuItems'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                {/* dropdown={ArrowDownward}  */}
                <HeaderOption title='Me' avatar={true} onClick={logOut} />
            </div>
        </div>
    )
}

export default MobileMenu
