import { useEffect, useRef, useState } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import './Reviews.css';

const Reviews = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const revText = useRef();
    const isLoggedIn = localStorage.getItem('token') !== null;

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await api.get(`/movies/${movieId}`);
                setMovie(response.data);
                setReviews(response.data.reviewIds || []);
            } catch (err) {
                console.error('Error fetching movie data:', err);
                setErrorMessage('Failed to load movie data.');
            }
        };

        fetchMovieData();
    }, [movieId]);

    const addReview = async (e) => {
        e.preventDefault();
        const review = revText.current.value;
        const token = localStorage.getItem('token');
    
        if (!token) {
            console.error("Token is missing. Please log in.");
            return;
        }
    
        try {
            const response = await api.post(
                '/reviews',
                {
                    reviewBody: review,
                    imdbId: movieId, // Pass the movie ID as part of the JSON payload
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setReviews([...reviews, response.data]);
            revText.current.value = '';
        } catch (err) {
            console.error('Error adding review:', err.response || err);
        }
    };
    

    if (!movie) {
        return <Alert variant="warning" className="reviews-loading">{errorMessage || 'Movie not found.'}</Alert>;
    }

    const backgroundImage = movie.backdrops && movie.backdrops.length > 0 ? movie.backdrops[0] : '';

    return (
        <div
            className="reviews-page"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="reviews-container">
                <h3 className="reviews-movie-title">{movie.title}</h3>
                <Row>
                    <Col md={4} className="text-center">
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className="reviews-movie-poster"
                        />
                    </Col>
                    <Col md={8}>
                        <div>
                            {reviews.length > 0 ? (
                                reviews.map((review, index) => (
                                    <div key={index} className="reviews-review">
                                        <p>{review.body}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="reviews-no-reviews">No reviews yet. Be the first to add one!</p>
                            )}
                        </div>
                        {isLoggedIn ? (
                            <ReviewForm
                                handleSubmit={addReview}
                                revText={revText}
                                labelText="Write a Review"
                            />
                        ) : (
                            <p className="reviews-no-reviews">Log in to add a review.</p>
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Reviews;
