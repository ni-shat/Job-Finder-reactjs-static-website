import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import JobDetails from './components/JobDetails/JobDetails';
import idAndData from './utilities/jobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('featuredJobs.json')
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'job/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => idAndData(params.jobId)
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
