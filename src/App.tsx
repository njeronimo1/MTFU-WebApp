
import { RouterProvider } from 'react-router-dom'
import './global.css';
import { Router } from "./Router";
import { Provider as ProviderRedux } from 'react-redux'
import { store } from './store';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import {
  QueryClient, QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export function App() {

  

  return (
    <>
      <ProviderRedux store={store}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </ProviderRedux>
    </>
  )
}


