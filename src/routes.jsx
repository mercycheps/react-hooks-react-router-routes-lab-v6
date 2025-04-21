import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import ErrorPage from "./pages/ErrorPage";
import { createRoutesFromElements, Route } from "react-router-dom";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
    <Route path="/movie/:id" element={<Movie />} />
    <Route path="/actors" element={<Actors />} />
    <Route path="/directors" element={<Directors />} />
  </>
);

export default routes;
