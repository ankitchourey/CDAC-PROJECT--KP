package com.example.demo.services;

import java.util.List;

import com.example.demo.models.Feedback;

public interface FeedbackService {
	Feedback addFeedbackDetails(Feedback f);
	List<Feedback> getAll();
}
