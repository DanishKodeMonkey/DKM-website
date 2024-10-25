import {lazy } from 'react'
import {RouteObject} from 'react-router-dom'
import {Navigate} from 'react-router-dom'


// lazy loaded page components

const Index = lazy(() =>import('../pages/Index.tsx'))
const CommentDetails = lazy(()=>import('../pages/CommentDetails.tsx'))
const About = lazy(()=>import('../pages/About.tsx'))

export const routes: RouteObject[] = [
    {path: '/', element: <Index />},
    {path:'/comments/:selectedComment', element: <CommentDetails />},
    {path:'/about', element: <About />},
    // Redirect for unknown paths
    {path: '*', element: <Navigate to='/' replace />}
]