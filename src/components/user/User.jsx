import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import { connect } from 'react-redux'
import { getPosts, getProfile, setCurrentPage } from '../../redux/user-reducer'
/* import Preloader from '../common/preloader/Preloader' */
import PostItem from './PostItem'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}))

const User = ({
  getPosts,
  getProfile,
  posts,
  currentPage,
  pageSize,
  totalPostsCount,
}) => {
  const classes = useStyles()

  const [pageNumber, setPageNumber] = useState(currentPage)

  const onPageChanged = (page) => {
    setPageNumber(page)
  }

  useEffect(() => {
    getPosts()
  }, [getPosts])
  useEffect(() => {
    getProfile()
  }, [getProfile])

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
    <>
      {/*   {isFetching ? <Preloader /> : null} */}
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
        <Grid container spacing={4}>
          {pagePosts.map((item) => (
            <>
              <PostItem item={item} />
            </>
          ))}
        </Grid>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.userPage.posts,
    pageSize: state.userPage.pageSize,
    totalPostsCount: state.userPage.totalPostsCount,
    currentPage: state.userPage.currentPage,
  }
}

export default connect(mapStateToProps, {
  getProfile,
  getPosts,
  setCurrentPage,
})(User)
