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
import ScrollToTop from '../src/components/ScrollToTop.jsx'
import Package from './pages/Package';
import ABlog from './pages/ABlog';
import Error from './pages/Error';


function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <><ScrollToTop/><Home /></>
    },
    {
      path: "/about",
      element: <><ScrollToTop/><About /></>
    },
    {
      path: "/contact",
      element: <><ScrollToTop/><Contact /></>
    },
    {
      path: "/blog",
      element: <><ScrollToTop/><Blog /></>
    },
    {
      path: "/packages",
      element: <><ScrollToTop/><Packages /></>
    },
    {
      path: "/signin",
      element: <><ScrollToTop/><Signin /></>
    },
    {
      path: "/signup",
      element: <><ScrollToTop/><Singup /></>
    },
    {
      path: "/queryModal",
      element: <><ScrollToTop/><QueryModal /></>
    },
    {
      path: "/packages/:id",
      element: <><ScrollToTop/><Package /></>
    },
    {
      path: "/blog/:id",
      element: <><ScrollToTop/><ABlog /></>
    },
    {
      path: "*",
      element: <><ScrollToTop/><Error /></>
    },
    
  ])



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
