import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './componenet/home/Home'
import About from './componenet/about/About'
import Contact from './componenet/contact/Contact'
import User from './componenet/user/User'
import Github, {githubinfo} from './componenet/github/Github'

const router = createBrowserRouter([
   {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:"user/:userid",
        element: <User/>
      },
      {
        path:"github",
        element: <Github/>,
        loader: () => { return githubinfo()}   // use for api call 
      },

    ]    
   }
])

// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path="/" element={<Layout/>}>
//       <Route path="" element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="contact" element={<Contact/>}/>
//     </Route>
//   )
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
