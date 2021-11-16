import { Route, Switch, Redirect } from 'react-router-dom'
import { Header, News, User, Movies } from './components'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Redirect exact from='/' to='/news' />
        <Route path='/news' component={News} />
        <Route path='/user' component={User} />
        <Route path='/movies' component={Movies} />
      </Switch>
    </div>
  )
}

export default App
