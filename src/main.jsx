import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './Routes/Routes';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className=''>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)


