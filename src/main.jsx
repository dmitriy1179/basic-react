import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/home/Home.jsx';
import NotFound from './pages/not-found/NotFound.jsx';
import Blog from './pages/blog/blog.jsx';
import Post from './pages/post/post.jsx';
import News from "./pages/news/news.jsx";
import OneNews from "./pages/one-news/oneNews.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:title",
        element: <Post />
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:desc",
        element: <OneNews />
      },

    ],
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
