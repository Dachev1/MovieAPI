package dev.idachev.movies.service;


public interface UserService {

    void registerUser(String username, String email, String password);

    String authenticateUser(String email, String password);
}
