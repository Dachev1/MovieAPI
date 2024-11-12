package dev.idachev.movies.service.impl;

import dev.idachev.movies.persistence.entity.Movie;
import dev.idachev.movies.persistence.entity.Review;
import dev.idachev.movies.persistence.repository.ReviewRepository;
import dev.idachev.movies.service.MovieService;
import dev.idachev.movies.service.ReviewService;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final MovieService movieService;
    private final MongoTemplate mongoTemplate;

    public ReviewServiceImpl(ReviewRepository reviewRepository, MovieService movieService, MongoTemplate mongoTemplate) {
        this.reviewRepository = reviewRepository;
        this.movieService = movieService;
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public Review createReview(String body, String imdbId) {
        Review review = this.reviewRepository.insert(new Review(body));

        this.mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds", review))
                .first();

        return review;
    }
}
