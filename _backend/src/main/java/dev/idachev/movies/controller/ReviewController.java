package dev.idachev.movies.controller;

import dev.idachev.movies.persistence.entity.Review;
import dev.idachev.movies.persistence.entity.Movie;
import dev.idachev.movies.persistence.repository.MovieRepository;
import dev.idachev.movies.persistence.repository.ReviewRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/reviews")
@CrossOrigin("*")
public class ReviewController {

    private final ReviewRepository reviewRepository;
    private final MovieRepository movieRepository;

    public ReviewController(ReviewRepository reviewRepository, MovieRepository movieRepository) {
        this.reviewRepository = reviewRepository;
        this.movieRepository = movieRepository;
    }

    // Accepts a JSON payload for review creation
    @PostMapping
    public ResponseEntity<?> createReview(
            @RequestBody ReviewRequest reviewRequest,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        if (userDetails == null) {
            return ResponseEntity.status(403).body("Unauthorized");
        }

        Optional<Movie> movieOptional = movieRepository.findMovieByImdbId(reviewRequest.getImdbId());
        if (movieOptional.isEmpty()) {
            return ResponseEntity.status(404).body("Movie not found");
        }

        Review review = new Review();
        review.setBody(reviewRequest.getReviewBody());

        Review savedReview = reviewRepository.save(review);
        return ResponseEntity.ok(savedReview);
    }

    // DTO for review requests
    public static class ReviewRequest {
        private String reviewBody;
        private String imdbId;

        // Getters and setters
        public String getReviewBody() {
            return reviewBody;
        }

        public void setReviewBody(String reviewBody) {
            this.reviewBody = reviewBody;
        }

        public String getImdbId() {
            return imdbId;
        }

        public void setImdbId(String imdbId) {
            this.imdbId = imdbId;
        }
    }
}
