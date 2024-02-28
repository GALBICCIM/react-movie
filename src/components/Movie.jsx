import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Movie = ({ movieId, title, coverImg, summary, genres }) => {
    return (
        <div>
            <h2>
                <Link to={`/movie/${movieId}`}>{title}</Link>
            </h2>
            <img src={coverImg} alt="" />
            <p>{summary}</p>

            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    );
};

Movie.propTypes = {
    movieId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
