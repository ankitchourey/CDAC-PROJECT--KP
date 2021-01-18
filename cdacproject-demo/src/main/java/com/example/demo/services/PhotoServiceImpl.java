package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.models.Advertise;
import com.example.demo.models.PhotoModel;
import com.example.demo.models.User;
import com.example.demo.repository.AdvertiseRepository;
import com.example.demo.repository.PhotoModelDao;
import com.example.demo.repository.PhotoRepository;

@Service
@Transactional
public class PhotoServiceImpl implements PhotoService {
	
	@Autowired
	PhotoModelDao photoDao;

	@Override
	public void addPhotos(List<PhotoModel> list, long id) {
		photoDao.addPhotos(list, id);
	}	
	
}
