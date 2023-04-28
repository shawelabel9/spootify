import React from 'react'
import MuiButton from '@mui/material/Button'
import {styled} from '@mui/material/styles'


export const HeaderButton = styled(MuiButton)((props)=>({
    ...props,
    borderRadius:'5px',
    backgroundColor:'rgb(39 39 42)',
    color: "white",
    fontWeight: 'bold',
    cursor:'pointer',
    fontSize: '14px',
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    margin: '10px 0 0 0',
    padding: '10px 20px 10px 20px',
    textTransform:'none',
    maxWidth: '100%',
    '&:hover':{
        backgroundColor:'rgb(82 82 91)'
    },
    '&:active':{
        backgroundColor:'rgb(39 39 42)'
    }
}))