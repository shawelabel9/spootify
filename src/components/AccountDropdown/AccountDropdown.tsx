import React,{useEffect, useState} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Divider } from '@mui/material';
import { HeaderButton } from '../Button/HeaderButton';

const AccountDropdown = () => {
  const [collapse, setCollapse] = useState(true)

  const handleClick = () => {
    setCollapse(!collapse)
  }
  const handleClickOutside = () => {

  }

  return (
    <>
      <div className="flex gap-1 bg-zinc-700 rounded-xl cursor-pointer" onClick={handleClick}>
          <AccountCircleIcon/>
          <p>abela98</p>
          {collapse?<ArrowDropDownIcon/>:<ArrowDropUpIcon/>}
      </div>
      {
        collapse?null:
        <div className="flex flex-col my-2 gap-2 px-1 py-2 rounded-lg bg-zinc-700 absolute z-10">
          <p className="text-white bg-zinc-700 pr-10 hover:bg-zinc-600 cursor-pointer">Profile</p>
          <p className="text-white bg-zinc-700 pr-10 hover:bg-zinc-600 cursor-pointer">Settings</p>
          <Divider className="bg-gray-400 m-0"/>
          <p className="text-white bg-zinc-700 pr-10 hover:bg-zinc-600 cursor-pointer">Logout</p>
        </div>
      }
    </>
  )
}

export default AccountDropdown