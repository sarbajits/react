import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import About from './components/about/About'
import Login from './components/login/Login'
import GetStarted from './components/signup/GetStarted'
import User from './components/user/User'
import Github from './components/github/Github'
import UserContextProvider from './context/UserContextProvider'
import ThemeProvider from './context/ThemeProvider'

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children: [
//     {
//       path: "/",
//       element: <Home/>
//     },
//     {
//       path:"/about",
//       element:<About/>
//     },
//     {
//       path:"/contact",
//       element:<Contact/>
//     },
//     {
//       path:"/login",
//       element:<Login/>
//     },
//     {
//       path:"/signup",
//       element:<GetStarted/>
//     }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<GetStarted />} />
      <Route path='/user/:username' element={<User/>}/>
      <Route path='/github' element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
