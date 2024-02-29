import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MovieDetail = ({ coverImg, title, year, url, genres, lang, rating, like }) => {
    return (
        <div>
            <img src={coverImg} alt="" />
            <h2>
                제목 : {title} {`(${year})  `}
                <Link to={url}>{"[자세히 보기]"}</Link>
            </h2>

            <ul>
                <li>장르 : {genres}</li>
                <li>언어 : {lang}</li>
                <li>평점 : {rating}</li>
                <li>좋아요 수 : {like}</li>
            </ul>
        </div>
    );
};

MovieDetail.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    like: PropTypes.number.isRequired
};

export default MovieDetail;
