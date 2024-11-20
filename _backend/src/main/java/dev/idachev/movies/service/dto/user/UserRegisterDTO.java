package dev.idachev.movies.service.dto.user;

import lombok.Data;

import java.io.Serializable;

@Data
public class UserRegisterDTO implements Serializable {
    private String username;
    private String email;
    private String password;
}

