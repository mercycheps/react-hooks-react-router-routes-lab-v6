import {Link} from 'react-router-dom';

function MovieCard({movie}) {
  
  return (
    <div>
        <h2>{movie.title}</h2>
        {/* What should go here? */}
        <Link to={`/movie/${movie.id}`}>More info</Link>
    </div>
  );
};

export default MovieCard;