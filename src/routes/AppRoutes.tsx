import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

// lazy loaded page components

const Index = lazy(() => import("../pages/Index.tsx"));
const CommentDetails = lazy(() => import("../pages/CommentDetails.tsx"));
const About = lazy(() => import("../pages/About.tsx"));
const ContactMe = lazy(() => import("../pages/ContactMe.tsx"));
const Portfolio = lazy(() => import("../pages/Portfolio.tsx"));

export const routes: RouteObject[] = [
  { path: "/", element: <Index /> },
  { path: "/comments/:selectedComment", element: <CommentDetails /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <ContactMe /> },
  { path: "/portfolio", element: <Portfolio /> },
  // Redirect for unknown paths
  { path: "*", element: <Navigate to="/" replace /> },
];
