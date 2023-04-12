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
import Statistics from './components/Statistics/Statistics';
import Error from './components/Error/Error';
import Remote from './components/Remote/Remote';
import Onsite from './components/Onsite/Onsite';
import Blog from './components/Blog/Blog';



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
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'job/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => idAndData(params.jobId)
      },
      {
        path: 'remote',
        element: <Remote></Remote>
      },
      {
        path: 'onsite',
        element: <Onsite></Onsite>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
