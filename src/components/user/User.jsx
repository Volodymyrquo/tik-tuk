import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { getPosts, getProfile, setCurrentPage } from '../../redux/user-reducer'
import { getNews } from '../../redux/news-reducer'
/* import Preloader from '../common/preloader/Preloader' */
import PostItem from './PostItem'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {},
    display: 'flex',
    marginBottom: '30px',
    justifyContent: 'flex-end',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    textAlign: 'left',
  },
  cover: {
    right: '0',
    width: '200px',
    height: '200px',
  },
}))

const User = ({
  getPosts,
  getProfile,
  posts,
  currentPage,
  pageSize,
  totalPostsCount,
  profile,
  isFetching,
  getNews,
}) => {
  const classes = useStyles()

  const [pageNumber, setPageNumber] = useState(currentPage)

  const onPageChanged = (page) => {
    setPageNumber(page)
  }

  useEffect(() => {
    getPosts()
    getProfile()
    getNews()
  }, [])

  let pagesCount = Math.ceil(totalPostsCount / pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const pagePosts = posts.slice(
    pageNumber * pageSize - pageSize,
    pageNumber * pageSize
  )

  return (
    <Container
      className={classes.cardGrid}
      maxWidth='md'
      style={{ marginTop: '80px' }}>
      <Pagination
        onChange={(event, page) => {
          onPageChanged(page)
        }}
        defaultPage={1}
        count={pagesCount}
        color='primary'
        boundaryCount={5}
        style={{ marginBottom: '16px' }}
      />
      {isFetching ? 'Loading...' : null}

      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component='h5' variant='h5'>
              {profile?.user?.nickname}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {profile?.user?.signature}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          component='img'
          className={classes.cover}
          image={profile?.user?.avatarLarger}
          title='Live from space album cover'
        />
      </Card>
      <Grid container spacing={4}>
        {pagePosts.map((item) => (
          <>
            <PostItem item={item} />
          </>
        ))}
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.userPage.posts,
    pageSize: state.userPage.pageSize,
    totalPostsCount: state.userPage.totalPostsCount,
    currentPage: state.userPage.currentPage,
    profile: state.userPage.profile,
    isFetching: state.userPage.isFetching,
  }
}

export default connect(mapStateToProps, {
  getProfile,
  getPosts,
  setCurrentPage,
  getNews,
})(User)
