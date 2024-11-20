package dev.idachev.movies.service;

import dev.idachev.movies.persistence.entity.Movie;

import java.util.List;
import java.util.Optional;

public interface MovieService {
    List<Movie> allMovies();

    Optional<Movie> getSingleMovie(String imdbId);
}
