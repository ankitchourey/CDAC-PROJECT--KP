package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Autowired
	UserRepository userDao;
	
	@Override
	public User updateUser(User updateUser) {
		// TODO Auto-generated method stub		
		User oldUser = userDao.findByEmail(updateUser.getEmail());
		oldUser.setId(updateUser.getId());
		oldUser.setPassword(passwordEncoder.encode(updateUser.getPassword()));
		oldUser.setName(updateUser.getName());
		oldUser.setUsername(updateUser.getUsername());
		oldUser.setEmail(updateUser.getEmail());
		oldUser.setRoles(updateUser.getRoles());
		return userDao.save(oldUser);
	}

		
	@Override
	public Iterable<User> displayAllUser() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

}
