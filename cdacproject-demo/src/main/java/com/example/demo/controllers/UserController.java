package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.User;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService userservice;
	
	@GetMapping("/readAllUsers")
	public Iterable<User> readAllUsers() {

		return userservice.displayAllUser();
	}
	
	@PutMapping("/update")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public User updateAdminDetails(@RequestBody User updateUser)
	{
		System.out.println("Updating User");
		userservice.updateUser(updateUser);
		return updateUser;
	}
	
	
}
