package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Advertise;
import com.example.demo.models.Enquiry;
import com.example.demo.models.User;

@Repository
public class EnquiryDao {
	@Autowired
	UserRepository userDao;
	
	@Autowired
	AdvertiseRepository adao;
	
	@Autowired
	EnquiryRepository edao;
	
	public Enquiry addEnquiry(long userId, long addId,Enquiry enquiry)
	{
		User user = null;
		Advertise add = null;
		Optional<User> findUserById =userDao.findById(userId);
		Optional<Advertise> findAdvById =adao.findById(addId);
		if(findUserById.isPresent() && findAdvById.isPresent()) {
			user=findUserById.get();
			add=findAdvById.get();
		}
		user.addEnquiry(add, enquiry);
		return enquiry;
	}
	
	public void deleteEnquiry(long userId, long addId, long enquiryId) {
		// TODO Auto-generated method stub
		User user=null;
		Advertise add =null ;
		Enquiry enq = null;
		Optional<User> findUserById =userDao.findById(userId);
		Optional<Advertise> findAdvById =adao.findById(addId);
		Optional<Enquiry> findEnqById =edao.findById(enquiryId);
		
		if(findUserById.isPresent() && findAdvById.isPresent() && findEnqById.isPresent()) {
			user=findUserById.get();
			add=findAdvById.get();
			enq=findEnqById.get();
		}
		user.removeEnquiry(add, enq);
	}

	public List<Enquiry> getEnquiries(long aid) {
		// TODO Auto-generated method stub
		Advertise add =null ;
		Optional<Advertise> findAdvById =adao.findById(aid);
		if (findAdvById.isPresent()) {
			add=findAdvById.get();
		}
		List<Enquiry> enqList = edao.getEnquiries(aid);
		return enqList;
	}
}
