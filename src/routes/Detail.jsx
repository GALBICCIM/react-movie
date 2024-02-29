import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

const Detail = () => {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState();
    const { id } = useParams();

    const getMovieDetails = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

        setDetails(json.data.movie);
        setLoading((prev) => !prev);
    };

    // large_cover_image, rating, title, url, year, genres, language, like_count
    useEffect(getMovieDetails, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <MovieDetail
                    coverImg={details.large_cover_image}
                    rating={details.rating}
                    title={details.title}
                    year={details.year}
                    url={details.url}
                    genres={details.genres}
                    lang={details.language}
                    like={details.like_count}
                />
            )}
        </div>
    );
};

export default Detail;
