package com.example.demo.services;

import java.util.List;

import com.example.demo.models.Enquiry;

public interface EnquiryService {
	Enquiry addEnquiry(long userId,long addId,Enquiry enquiry);
	void deleteEnquiry(long userId,long addId,long enquiryId);
	List<Enquiry> getEnquiry(long aid);
}

