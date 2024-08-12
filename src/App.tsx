
import { RouterProvider } from 'react-router-dom'
import './global.css';
import { Router } from "./Router";
import { Provider as ProviderRedux } from 'react-redux'
import { store } from './store';

export function App() {

  return (
    <>
      <ProviderRedux store={store}>
        <RouterProvider router={Router} />
      </ProviderRedux>
    </>
  )
}


