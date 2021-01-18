package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Feedback;
import com.example.demo.services.FeedbackService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/feedback")
public class FeedbackController {

	@Autowired
	FeedbackService fservice;
	
	@PostMapping
	public ResponseEntity<?> insertAdvertise(@RequestBody Feedback f)
	{
		System.out.println("adding feedback to db..."+f);
		Feedback fr = fservice.addFeedbackDetails(f);
		return new ResponseEntity<Feedback>(fr,HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Feedback>> getAllFeedback()
	{
		List<Feedback> fList = fservice.getAll();
		return new ResponseEntity<List<Feedback>>(fList,HttpStatus.OK);
	}

}
