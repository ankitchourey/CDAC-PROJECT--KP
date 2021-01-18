package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.models.Advertise;
import com.example.demo.models.Enquiry;
import com.example.demo.models.User;
import com.example.demo.repository.AdvertiseRepository;
import com.example.demo.repository.EnquiryDao;
import com.example.demo.repository.EnquiryRepository;
import com.example.demo.repository.UserRepository;

@Service
@Transactional
public class EnquiryServiceImpl implements EnquiryService {
	
	@Autowired
	EnquiryDao edao;
	
	@Override
	public Enquiry addEnquiry(long userId, long addId, Enquiry enquiry) {
		// TODO Auto-generated method stub
		return edao.addEnquiry(userId, addId, enquiry);
	}

	@Override
	public void deleteEnquiry(long userId, long addId, long enquiryId) {
		edao.deleteEnquiry(userId, addId, enquiryId);
	}

	@Override
	public List<Enquiry> getEnquiry(long aid) {
		// TODO Auto-generated method stub
		return edao.getEnquiries(aid);
	}
}
