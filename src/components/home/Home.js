import React, { useState, useEffect } from 'react';
import api from '../../api/axiosConfig';
import Hero from "../hero/Hero";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get('/movies');
                setMovies(response.data);
            } catch (err) {
                console.error('Error fetching movies:', err);
                setError('Failed to fetch movies');
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            <Hero movies={movies} />
        </div>
    );
};

export default Home;
