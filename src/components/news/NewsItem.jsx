import React, { useState } from 'react'
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 2, 1),
  },
}))

const NewsItem = ({ item }) => {
  const classes = useStyles()

  return (
    <Grid item key={item.id} xs={12} md={12}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Link component={NavLink} to='/user'>
              <Avatar
                aria-label='recipe'
                alt={item.authorMeta.name}
                src={item.authorMeta.avatar}
              />
            </Link>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={item.authorMeta.nickName}
        />
        <CardMedia className={classes.cardMedia}>
          <ReactPlayer
            width='100%'
            height='100%'
            controls
            url={item.videoUrl}
          />
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography>{item.text}</Typography>
          <Typography>Comments: {item.commentCount}</Typography>
          <Typography>Likes: {item.shareCount}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default NewsItem
