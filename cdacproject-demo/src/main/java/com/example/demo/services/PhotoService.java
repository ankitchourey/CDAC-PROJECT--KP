package com.example.demo.services;

import java.util.List;

import com.example.demo.models.PhotoModel;

public interface PhotoService {
	public void addPhotos(List<PhotoModel> list,long id);
	
}
