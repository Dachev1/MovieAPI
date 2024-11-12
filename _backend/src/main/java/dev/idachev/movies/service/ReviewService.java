package dev.idachev.movies.service;

import dev.idachev.movies.persistence.entity.Review;

public interface ReviewService {
    Review createReview(String body, String imdbId);
}
