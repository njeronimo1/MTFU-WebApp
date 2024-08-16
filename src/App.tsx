
import { RouterProvider } from 'react-router-dom'
import './global.css';
import { Router } from "./Router";
import { Provider as ProviderRedux } from 'react-redux'
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {

  return (
    <>
      <ProviderRedux store={store}>
        <ToastContainer />
        <RouterProvider router={Router} />
      </ProviderRedux>
    </>
  )
}


