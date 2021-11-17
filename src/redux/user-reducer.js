import { getUserFeed, getUserInfo } from '../api/api'
import { postsData } from '../utils/postsData'

const SET_PROFILE = 'SET_PROFILE'
const SET_POSTS = 'SET_POSTS'

const initialState = {
  profile: {},
  posts: [],
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
    default:
      return state
  }
}

export const setProfile = (profile) => ({ type: SET_PROFILE, payload: profile })
export const setPosts = (posts) => ({ type: SET_POSTS, payload: posts })

export const getProfile = () => async (dispatch) => {
  const data = await getUserInfo()
  console.log('profile = ' + data)

  dispatch(setProfile(data))
}

export const getPosts = () => (dispatch) => {
  const data = postsData()
  console.log('posts = ' + Object.keys(data))

  dispatch(setPosts(data.itemList))
}

export default userReducer
