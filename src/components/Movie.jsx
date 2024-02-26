import PropTypes from "prop-types";

const Movie = ({ title, coverImg, summary, genres }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={coverImg} alt="Image none." />
            <p>{summary}</p>

            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
            <hr />
        </div>
    );
};

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
