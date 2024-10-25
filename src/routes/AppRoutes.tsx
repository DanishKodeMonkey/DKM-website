import {lazy } from 'react'
import {RouteObject} from 'react-router-dom'
import {Navigate} from 'react-router-dom'


// lazy loaded page components

const Index = lazy(() =>import('../pages/Index.tsx'))
const CommentDetails = lazy(()=>import('../pages/CommentDetails.tsx'))

export const routes: RouteObject[] = [
    {path: '/', element: <Index />},
    {path:'/comments/:selectedComment', element: <CommentDetails />},
    // Redirect for unknown paths
    {path: '*', element: <Navigate to='/' replace />}
]