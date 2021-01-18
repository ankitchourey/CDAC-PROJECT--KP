package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Advertise;
import com.example.demo.models.User;

@Repository
public class AdvertiseDao {

	
	@Autowired
	AdvertiseRepository adao;
	
	@Autowired
	UserRepository userDao;
	
	public Advertise insertAdvertise(Advertise a, long userId) {
		// TODO Auto-generated method stub
		User user;
		Optional<User> findUserById =userDao.findById(userId);
		if(findUserById.isPresent()) {
			user=findUserById.get();
			user.addAdvertisement(a);
		}
		return a;
	}
	
	public void removeAdd(long id) {
		adao.deleteById(id);
	}
	
	public List<Advertise> getAddByCategory(String x) {
		return adao.getAddByCategory(x);
	}
	
	
	public List<Advertise> getAddPostedByUser(long uid) {
		return adao.getAddByUser(uid);
	}
	
	
	public void editAdvertise(long aid, Advertise a) {

		System.out.println("id"+aid);

		Advertise adv;
		Optional<Advertise> findAdvById =adao.findById(aid);
		if (findAdvById.isPresent()) {
			adv=findAdvById.get();
			a.setPhotoList(adv.getPhotoList());
			adao.save(a);
		}
		
	}

	public Advertise getAdById(long addId) {
		Advertise adv=null;
		Optional<Advertise> findAdvById =adao.findById(addId);
		if (findAdvById.isPresent()) {
			adv=findAdvById.get();
		}

		return adv;

		//return sf.unwrap(Session.class).get(Advertise.class, addId);
	}
	
	
	

}
