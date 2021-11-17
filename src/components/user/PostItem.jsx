import React, { useState } from 'react'
import {
  Typography,
  Button,
  CardActions,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Fade,
  Backdrop,
  Modal,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '0',
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

const PostItem = ({ item }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  const handleOpen = (id) => {
    setOpen(true)
    setVideoUrl(item.videoUrl)
  }

  const handleClose = () => {
    setOpen(false)
  }
  console.log(item.covers.default)
  return (
    <Grid item key={item.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          component='img'
          className={classes.cardMedia}
          image={item.covers.default}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant='h6' gutterBottom>
            {item.text}
          </Typography>
          {item.hashtags.map((item, idx) => (
            <Typography key={idx}>#{item.name}</Typography>
          ))}
        </CardContent>
        <CardActions>
          <div>
            <Button
              onClick={() => {
                handleOpen()
              }}
              size='small'
              color='secondary'
              variant='contained'>
              Play
            </Button>
            <Modal
              aria-labelledby='transition-modal-title'
              aria-describedby='transition-modal-description'
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}>
              <Fade in={open}>
                <div className={classes.paper}>
                  <h2 id='transition-modal-title'>{item.title}</h2>
                  <ReactPlayer
                    width='100%'
                    height='100%'
                    controls
                    url={videoUrl}
                  />
                </div>
              </Fade>
            </Modal>
          </div>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default PostItem
