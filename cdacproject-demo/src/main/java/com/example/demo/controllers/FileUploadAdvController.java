package com.example.demo.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.models.PhotoModel;
import com.example.demo.services.PhotoService;

@RestController
@RequestMapping("/upload")
@CrossOrigin(allowedHeaders = "*",origins = "*")
public class FileUploadAdvController {

	@Autowired
	private PhotoService pservice;
	public static String uploadLocation=System.getProperty("user.dir")+"/uploads";
	
	@PostMapping("/{id}")
	public ResponseEntity<?> processUploadForm(@RequestParam(value = "image1", required = false) MultipartFile image1,
			@RequestParam(value = "image2", required = false) MultipartFile image2,
			@RequestParam(value = "image3", required = false) MultipartFile image3,
			@RequestParam(value = "image4", required = false) MultipartFile image4,
			@RequestParam(value = "image5", required = false) MultipartFile image5,
			@PathVariable int id)
	{
		List<PhotoModel> list = new ArrayList<>();
		try {
			if(image1 != null)
			{
				list.add(new PhotoModel(image1.getBytes()));
				System.out.println(image1);
			}
			if(image2 != null)
			{
				list.add(new PhotoModel(image2.getBytes()));
				System.out.println(image2);
			}
			if(image3 != null)
			{
				list.add(new PhotoModel(image3.getBytes()));
				System.out.println(image3);
			}
			if(image4 != null)
			{
				list.add(new PhotoModel(image4.getBytes()));
				System.out.println(image4);
			}
			if(image5 != null)
			{
				list.add(new PhotoModel(image5.getBytes()));
				System.out.println(image5);
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		pservice.addPhotos(list, id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
