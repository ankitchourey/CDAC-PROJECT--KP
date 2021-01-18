package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.models.Advertise;
import com.example.demo.models.User;
import com.example.demo.repository.AdvertiseDao;
import com.example.demo.repository.AdvertiseRepository;
import com.example.demo.repository.UserRepository;

@Service
@Transactional
public class AddServiceImpl implements AddService {

	@Autowired
	AdvertiseDao addDao;
	
	@Override
	public Advertise addAdvertise(Advertise a, long userId) {
		return addDao.insertAdvertise(a, userId);
	}
	

	@Override
	public void deleteAdd(long id) {
		addDao.removeAdd(id);
	}

	@Override
	public List<Advertise> getAddByCategory(String cate) {
		return addDao.getAddByCategory(cate);
	}

	@Override
	public List<Advertise> getAddPostedByUser(long uid) {
		return addDao.getAddPostedByUser(uid);
	}

	@Override
	public void updateAdvertise(long aid, Advertise a) {
		addDao.editAdvertise(aid, a);
	}


	@Override
	public Advertise getAdvertiseById(long addId) {
		return addDao.getAdById(addId);
	}

}
