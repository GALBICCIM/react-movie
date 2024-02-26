import { useState, useEffect } from "react";
import Movie from "../components/Movie";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();

        setMovies(json.data.movies);
        setLoading((prev) => !prev);
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie key={movie.id} title={movie.title} coverImg={movie.medium_cover_image} summary={movie.summary} genres={movie.genres} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
