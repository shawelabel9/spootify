import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface CardTitle{
  title:string;
  category: string;
}

const PlaylistCard = ({title,category}:CardTitle) => {
  return (
    <Card sx={{ maxWidth: 200,padding:'10px',position:'relative',left:'0px',top:'0px', backgroundColor:'rgb(39 39 42 )', '&:hover':{
      backgroundColor:'rgb(63 63 70)'
  } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <p className="text-white">{title}</p>
        <p className='text-gray-400'>{category}</p>
      </CardActionArea>
    </Card>
  )
}

export default PlaylistCard