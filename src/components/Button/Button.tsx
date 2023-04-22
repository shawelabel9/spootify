import React from 'react'
import MuiButton from '@mui/material/Button'
import {styled} from '@mui/material/styles'

export const Button = styled(MuiButton)((props)=>({
    ...props,
    borderRadius: 50,
    backgroundColor:'#32C232',
    color: "black",
    fontWeight: 'bold',
    margin: '20px 0 0 0',
    padding: '10px 20px 10px 20px',
    maxWidth: '100%',
    hover:{
        backgroundColor:'none'
    }
}))
    
