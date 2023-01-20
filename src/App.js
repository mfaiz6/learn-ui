import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';


function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/blog",
      element: <Blog />
    },

  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
