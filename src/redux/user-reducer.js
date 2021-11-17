import { getTrendingFeed, getUserInfo } from '../api/api'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_PROFILE = 'SET_PROFILE'
const SET_POSTS = 'SET_POSTS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
  profile: {},
  posts: [],
  pageSize: 6,
  totalPostsCount: 30,
  currentPage: 1,
  isFetching: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      }
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      }
    default:
      return state
  }
}
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
})
export const setProfile = (profile) => ({ type: SET_PROFILE, payload: profile })
export const setPosts = (posts) => ({ type: SET_POSTS, payload: posts })
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
})

export const getProfile = () => async (dispatch) => {
  dispatch(toggleIsFetching(true))

  const data = await getUserInfo()

  dispatch(setProfile(data))
  dispatch(toggleIsFetching(false))
}

export const getPosts = () => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  const data = await getTrendingFeed()

  dispatch(setPosts(data))
  dispatch(toggleIsFetching(false))
}

export default userReducer
