package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Advertise;
import com.example.demo.models.PhotoModel;

@Repository
public class PhotoModelDao {

	
	@Autowired
	PhotoRepository pdao;
	
	@Autowired
	AdvertiseRepository adao;
	
	
	public void addPhotos(List<PhotoModel> list, long id) {
		Advertise a;
		Optional<Advertise> findAdvById = adao.findById(id);
		if(findAdvById.isPresent())
		{
			a=findAdvById.get();
			for (PhotoModel photos : list) {
				System.out.println(photos);
				photos.setAdvertise(a);
				a.getPhotoList().add(photos);
			}
		}
	}
	
	
}
