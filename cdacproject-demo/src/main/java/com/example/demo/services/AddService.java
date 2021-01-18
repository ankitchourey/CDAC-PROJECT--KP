package com.example.demo.services;
import java.util.List;

import com.example.demo.models.Advertise;


public interface AddService {
	Advertise addAdvertise(Advertise a,long userId);
	void deleteAdd(long id);
	List<Advertise> getAddByCategory(String cate);
	List<Advertise> getAddPostedByUser(long uid);
	void updateAdvertise(long i, Advertise a);
	Advertise getAdvertiseById(long addId);
}
