import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
// import ArrowDownward from '@mui/icons-material/ArrowDownward';


// dropdown}
function HeaderOption({avatar, Icon, title, onClick}) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={user?.photoUrl}>{user?.email[0]} </Avatar>}
      {/* {dropdown && <ArrowDownward src={dropdown}/>} */}
      <h3 className='hearderOption__title'> {title} </h3>
    </div>
  )
}

export default HeaderOption
