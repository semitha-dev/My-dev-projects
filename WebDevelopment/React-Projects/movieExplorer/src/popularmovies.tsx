import { useEffect, useState } from "react";
import axios from "axios";

interface Movie
{
    id : number
    title : string
    poster_path : string

}

function PopularMovieList (){

    const [movie , setMovie] = useState<Movie[]>([]);
    const [loading , setloading] = useState<boolean>(true);
    const [error , setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGNhY2U4OThiNzdhYjk2Yzc0MTQ3OTE0ODIwNTYzZCIsIm5iZiI6MTcyNjQ1NTY0Ni42NTAwNjcsInN1YiI6IjY2ZTc5ZTBhOWRmYmJkZjBlNmNmZDA5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uYJy994ydZ8Rc1QjtRTwc2JnVKC5xYiojUd-AAppGe8'
                    }
                });
                setMovie(response.data.results);
            }
            catch(error){
                setError("Failed To load Please Check you internet")
            }
            finally{
                setloading(false)
            }
        }
        fetchMovies();
    })

    if (loading) return <p>Loading ... </p>
    if (error) return <p>{error}</p>

    return (
        <div className="movieContainer">

            {movie.map(movie => (
                <div key={movie.id} className="movie-card">
                    <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"

                    />
                    <h3>{movie.title}</h3>

                </div>


                
            ))}
            
        </div>
    )



}

export default PopularMovieList