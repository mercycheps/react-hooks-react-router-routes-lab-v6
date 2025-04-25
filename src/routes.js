import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import ErrorPage from "./pages/ErrorPage";
import { createRoutesFromElements, Route } from "react-router-dom";

const routes = createRoutesFromElements([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
]);
  
    

export default routes;
