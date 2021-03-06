import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          <Navbar menuButton={classes.menuButton} />
          <Typography variant='h6' className={classes.title}>
            TIK TUK
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
