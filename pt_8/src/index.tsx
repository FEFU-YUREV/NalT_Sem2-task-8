import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import Chart from './chart/Chart'
import Laptop from './laptop/Laptop'
import List from './list/List'
import Testing from './testing/Testing'
import reportWebVitals from './reportWebVitals'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/list',
    element: <List />,
  },
  {
    path: '/laptop/:id',
    element: <Laptop />,
  },
  {
    path: '/chart',
    element: <Chart />,
  },
  {
    path: '/test',
    element: <Testing />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()