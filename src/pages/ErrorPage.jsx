import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    
    return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
      </main>
    </div>
    );
}

export default ErrorPage;