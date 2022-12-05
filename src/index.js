import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './pages/home';
import Articles from './pages/articles';
import Login from './login';
import Conditions from './pages/conditions';
import Privacy from './pages/privacy';
import About from './pages/about';
import Partner from './pages/partner';
import Support from './pages/support';
import Flutter from './pages/flutter';
import Courses from './pages/courses';
import Register from "./pages/register";


const router = createBrowserRouter([
  {
    path: "/", element: <App/>, children:[
    {path: "" , element: <Home/>},
    {path: "articles" , element: <Articles/>},
    {path: "tac" , element: <Conditions/>},
    {path: "privacy" , element: <Privacy/>},
    {path: "about" , element: <About/>},
    {path: "partner" , element: <Partner/>},
    {path: "support" , element: <Support/>},
    {path: "course/flutter-course" , element: <Flutter/>},

    ]},
  {path: "/login" , element: <Login/>},
  {path: "/signup" , element: <Register/>},

  {path: "/courses" , element: <Courses/>}
    // {path: "course/flutter-course" , element: <Flutter/>}
  


  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
