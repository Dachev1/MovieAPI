package dev.idachev.movies.service.dto.user;

import lombok.Data;

import java.io.Serializable;

@Data
public class UserLoginDTO implements Serializable {
    private String email;
    private String password;
}


