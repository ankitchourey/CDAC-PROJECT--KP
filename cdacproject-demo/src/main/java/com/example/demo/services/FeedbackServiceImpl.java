package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Feedback;
import com.example.demo.repository.FeedbackRepository;

@Service
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	FeedbackRepository fdao;
	
	@Override
	public Feedback addFeedbackDetails(Feedback f) {
		// TODO Auto-generated method stub
		return fdao.save(f);
	}

	@Override
	public List<Feedback> getAll() {
		// TODO Auto-generated method stub
		return fdao.findAll();

	}
	
}
