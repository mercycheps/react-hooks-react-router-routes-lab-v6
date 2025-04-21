import { createBrowserRouter } from "react-dom";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
]);


export default routes;