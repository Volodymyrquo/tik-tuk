import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Movie from './NewsItem'

import { connect } from 'react-redux'
import { getNews } from '../../redux/news-reducer'
import { getProfile, getPosts } from '../../redux/user-reducer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    marginTop: '80px',
  },
}))

const News = ({ news, getNews, getProfile, getPosts }) => {
  const classes = useStyles()

  useEffect(() => {
    getNews()
    getProfile()
    getPosts()
  }, [])
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} maxWidth='md'>
        <Grid container spacing={2}>
          {news.map((item) => (
            <Movie key={item.id} item={item} />
          ))}
        </Grid>
      </Paper>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
  }
}

export default connect(mapStateToProps, {
  getNews,
  getProfile,
  getPosts,
})(News)
