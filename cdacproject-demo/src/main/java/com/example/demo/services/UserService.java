package com.example.demo.services;

import java.math.BigInteger;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.models.User;


public interface UserService {
	User updateUser(User updateUser);
	Iterable<User> displayAllUser();
}
