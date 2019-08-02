import * as React from 'react'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { Route } from 'react-router-dom'
import style from './style'

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Usefrs</h2>
}

export const Home = () => (
  <button className={style.hello} onClick={() => console.log('lllll')}>
    He jkhfgjllo
  </button>
)

function AppRouter() {
  return (
    <Router history={createBrowserHistory()}>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </div>
    </Router>
  )
}

export default AppRouter
