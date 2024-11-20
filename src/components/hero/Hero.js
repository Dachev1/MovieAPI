import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import './Hero.css';
import '../../App.css';

const Hero = ({ movies }) => {
    const [likedMovies, setLikedMovies] = useState(() => {
        const storedLikes = localStorage.getItem('likedMovies');
        return storedLikes ? JSON.parse(storedLikes) : [];
    });
    const [trailer, setTrailer] = useState(null);
    const isLoggedIn = localStorage.getItem('token') !== null;

    useEffect(() => {
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
    }, [likedMovies]);

    const toggleLikeMovie = (movieId) => {
        setLikedMovies((prev) =>
            prev.includes(movieId) ? prev.filter((id) => id !== movieId) : [...prev, movieId]
        );
    };

    const closeTrailer = () => setTrailer(null);

    const getEmbedLink = (link) => {
        const videoId = link.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <div className="movie-carousel-container">
            {trailer && (
                <div className="trailer-overlay">
                    <iframe
                        className="trailer-iframe"
                        src={`${getEmbedLink(trailer)}?autoplay=1`}
                        title="Trailer"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                    <button className="close-trailer" onClick={closeTrailer}>
                        ✖
                    </button>
                </div>
            )}

            <Carousel indicators={false} navButtonsAlwaysVisible interval={9000}>
                {movies?.map((movie) => (
                    <div key={movie.imdbId} className="movie-item">
                        <div className="movie-backdrop-container">
                            {movie.backdrops.map((backdrop, index) => (
                                <img
                                    key={index}
                                    src={backdrop}
                                    alt={`Backdrop ${index + 1}`}
                                    className="backdrop-image"
                                />
                            ))}
                        </div>
                        <div className="movie-details">
                            <div className="movie-poster">
                                <img src={movie.poster} alt={movie.title} className="poster-image" />
                                {isLoggedIn && (
                                    <div
                                        className={`heart-icon ${likedMovies.includes(movie.imdbId) ? 'liked' : ''
                                            }`}
                                        onClick={() => toggleLikeMovie(movie.imdbId)}
                                    >
                                        {likedMovies.includes(movie.imdbId) ? '❤️' : '🤍'}
                                    </div>
                                )}
                            </div>
                            <div className="movie-info">
                                <h2 className="movie-title">{movie.title}</h2>
                                <div className="movie-buttons-container">
                                    <button
                                        className="btn btn-info"
                                        onClick={() => setTrailer(movie.trailerLink)}
                                    >
                                        Watch Trailer
                                    </button>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => {
                                            if (isLoggedIn) {
                                                window.location.href = `/reviews/${movie.imdbId}`;
                                            } else {
                                                window.location.href = '/restricted';
                                            }
                                        }}
                                    >
                                        Reviews
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Hero;
