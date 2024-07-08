
import { RouterProvider } from 'react-router-dom'
import './global.css';
import { Router } from "./Router";

export function App() {

  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}


