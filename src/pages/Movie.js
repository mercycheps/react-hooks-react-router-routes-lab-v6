import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";


function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((r) => {
        if (!r.ok) {
          throw new Error("Movie not found");
        }
        return r.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setMovie(null);
        setLoading(false);
      });
  }, [id]);
  
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Movie info here! */}
        {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>{movie.time}</p>
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </>
        ) : (
          <p>Movie not found.</p>
        )}
      </main>
    </>
  );
}


export default Movie;
