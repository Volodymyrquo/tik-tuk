import { getTrendingFeed } from '../api/api'

const SET_NEWS = 'SET_NEWS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
  news: [],
  isFetching: false,
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
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

export const setNews = (news) => ({ type: SET_NEWS, payload: news })
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
})
export const getNews = () => async (dispatch) => {
  dispatch(toggleIsFetching(true))

  const data = await getTrendingFeed()

  dispatch(setNews(data))
  dispatch(toggleIsFetching(false))
}

export default newsReducer
