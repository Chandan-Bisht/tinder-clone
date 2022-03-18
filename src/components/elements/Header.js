import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>

        <img
            className='header_logo'
            src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.png'
            alt=''
        />
        
        <IconButton>
            <ForumIcon fontSize="large" className="header_icon"/>
        </IconButton>
        
    </div>
  )
}
