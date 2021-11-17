import { getTrendingFeed, getUserInfo } from '../api/api'

const SET_PROFILE = 'SET_PROFILE'
const SET_POSTS = 'SET_POSTS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
  profile: {},
  posts: [],
  pageSize: 6,
  totalPostsCount: 30,
  currentPage: 1,
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
    default:
      return state
  }
}

export const setProfile = (profile) => ({ type: SET_PROFILE, payload: profile })
export const setPosts = (posts) => ({ type: SET_POSTS, payload: posts })
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
})

export const getProfile = () => async (dispatch) => {
  const data = await getUserInfo()

  dispatch(setProfile(data))
}

export const getPosts = () => async (dispatch) => {
  const data = await getTrendingFeed()

  dispatch(setPosts(data))
}

export default userReducer
