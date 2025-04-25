import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{movie.title}</h2>
        {/* What should go here? */}
        <Link to={`/movie/${title.id}`}>View info</Link>
    </article>
  );
};

export default MovieCard;