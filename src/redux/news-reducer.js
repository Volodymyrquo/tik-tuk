import { getTrendingFeed } from '../api/api'

const SET_NEWS = 'SET_NEWS'

const initialState = {
  news: [],
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      }
    default:
      return state
  }
}

export const setNews = (news) => ({ type: SET_NEWS, payload: news })

export const getNews = () => async (dispatch) => {
  const data = await getTrendingFeed()

  dispatch(setNews(data))
}

export default newsReducer
