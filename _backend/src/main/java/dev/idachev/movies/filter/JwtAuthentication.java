package dev.idachev.movies.filter;

public class JwtAuthentication {

    private String email;

    public JwtAuthentication(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }
}

