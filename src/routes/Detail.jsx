import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState({});
    const { id } = useParams();

    const getMovieDetails = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

        setDetails(json.data.movie);
        setLoading((prev) => !prev);
    };

    // large_cover_image, rating, title, url, year, genres, language, like_count
    useEffect(() => {
        getMovieDetails();
    }, []);
    return (
        <div>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <div>
                    <img src={details.large_cover_image} alt="" />
                    <h2>
                        제목 : {details.title} {`(${details.year})  `}
                        <a href={details.url}>{"[자세히 보기]"}</a>
                    </h2>

                    <ul>
                        <li>장르 : {details.genres}</li>
                        <li>언어 : {details.language}</li>
                        <li>평점 : {details.rating}</li>
                        <li>좋아요 수 : {details.like_count}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Detail;
