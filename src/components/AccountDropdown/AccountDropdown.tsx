import React,{useEffect, useRef, useState} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Divider } from '@mui/material';
import { HeaderButton } from '../Button/HeaderButton';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase/firebase';

const AccountDropdown = () => {
  const [collapse, setCollapse] = useState(true)
  const dropDownRef = useRef<HTMLDivElement | null>(null)
  const user = useSelector((state:any) => state.user)
  const username = user?.email.split('@')[0]
  const collapseDropDown = () => {
    setCollapse(!collapse)
  }
  const handleClickOutside = () => {
    setCollapse(true)
  }
  useEffect(() => {
    const handleClick = (e:MouseEvent) => {
      if(dropDownRef.current && !dropDownRef.current.contains(e.target as Node)){
        handleClickOutside()
      }  
    }
    document.addEventListener("mousedown",handleClick)

    return () => {document.removeEventListener("mousedown",handleClick)}
  },[handleClickOutside])

  return (
    <div ref={dropDownRef}>
      <div className="flex gap-1 bg-zinc-700 rounded-xl cursor-pointer" onClick={collapseDropDown}>
          <AccountCircleIcon/>
          <p>{username}</p>
          {collapse?<ArrowDropDownIcon/>:<ArrowDropUpIcon/>}
      </div>
      {
        collapse?null:
        <div className="flex flex-col my-2 gap-2 px-1 py-2 rounded-lg bg-zinc-700 w-40 absolute z-1">
          <p className="text-white bg-zinc-700 pr-10 pl-2 hover:bg-zinc-600 cursor-pointer">Profile</p>
          <p className="text-white bg-zinc-700 pr-10 pl-2 hover:bg-zinc-600 cursor-pointer">Settings</p>
          <Divider className="bg-gray-400 m-0"/>
          <p className="text-white bg-zinc-700 pr-10 pl-2 hover:bg-zinc-600 cursor-pointer" onClick={() => signOut(auth)}>Sign Out</p>
        </div>
      }
    </div>
  )
}

export default AccountDropdown