import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import FAQ from './pages/FAQ'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/Pricing',
        element: <Pricing></Pricing>,
    },
    {
        path: '/FAQ',
        element: <FAQ></FAQ>,
    },
])

const App = () => {
    return ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

export default App
