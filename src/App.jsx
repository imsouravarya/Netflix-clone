import React from 'react'
import Home from './pages/home/home'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Signup from './pages/Login/Signup'
import TVshows from './pages/TVshows/TVshows'
import Movies from './pages/Movies/Movies'
import News from './pages/News/News'
import Mylist from './pages/Mylist/Mylist'
import Player from './pages/Player/Player'
import Intro from './pages/Intro/Intro'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/signup' element={<Signup/>}/>
        <Route path = '/tvshows' element={<TVshows/>}/>
        <Route path = '/movies' element={<Movies/>}/>
        <Route path = '/news' element={<News/>}/>
        <Route path = '/mylist' element={<Mylist/>}/>
        <Route path = '/player/:id' element={<Player/>}/>
        <Route path = '/intro' element={<Intro/>}/>
      </Routes>
    </div>
  )
}

export default App; // ✅ This is important


