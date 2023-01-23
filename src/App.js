import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Packages from './pages/Packages';
import Signin from './pages/Signin';
import Singup from './pages/Singup';
import QueryModal from './pages/QueryModal';



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
    {
      path: "/packages",
      element: <Packages />
    },
    {
      path: "/signin",
      element: <Signin />
    },
    {
      path: "/signup",
      element: <Singup />
    },
    {
      path: "/queryModal",
      element: <QueryModal />
    },
    
  ])



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
