import * as axios from 'axios'
const instance = axios.create({
  baseURL: `https://tiktok33.p.rapidapi.com`,
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
  },
})

export const getTrendingFeed = () => {
  return instance(`/trending/feed`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

export const getUserInfo = () => {
  return instance(`/user/info/dave.xp`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

export const getUserFeed = () => {
  return instance(`/user/feed/dave.xp`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}
