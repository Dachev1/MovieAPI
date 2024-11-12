package dev.idachev.movies.service.impl;

import dev.idachev.movies.persistence.entity.Movie;
import dev.idachev.movies.persistence.repository.MovieRepository;
import dev.idachev.movies.service.MovieService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImpl implements MovieService {
    private final MovieRepository movieRepository;

    public MovieServiceImpl(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public List<Movie> allMovies() {
        return this.movieRepository.findAll();
    }

    @Override
    public Optional<Movie> getSingleMovie(String imdbId) {
        return this.movieRepository.findMovieByImdbId(imdbId);
    }
}
