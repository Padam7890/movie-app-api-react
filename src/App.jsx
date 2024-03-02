import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import HomePage from './Pages/HomePage';
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";


function App() {
  const [count, setCount] = useState(0);





  return (
    <>
    <RouterProvider router={router} />

    </>
  )
}

export default App
