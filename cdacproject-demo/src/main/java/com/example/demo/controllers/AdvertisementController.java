package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Advertise;
import com.example.demo.services.AddService;


@CrossOrigin(origins = "*",  maxAge = 3600)
@RestController
@RequestMapping("/advertise")
public class AdvertisementController {

	@Autowired
	AddService aservice;
	
	@PostMapping("/{user_id}")
	public ResponseEntity<?> insertAdvertise(@RequestBody Advertise adv ,@PathVariable int user_id)
	{
		System.out.println("adding advertise to db...");
		Advertise add = aservice.addAdvertise(adv, user_id);
		return new ResponseEntity<Advertise>(add,HttpStatus.OK);
	}
	
	@DeleteMapping("/{i}")
	public ResponseEntity<?> deleteAdvertiseDetails(@PathVariable int i)
	{
		System.out.println("deleting add "+i);
		aservice.deleteAdd(i);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	
	@PutMapping("/{i}")
	public ResponseEntity<?> updateAdvertiseDetails(@RequestBody Advertise a,@PathVariable int i)
	{
		System.out.println("updating add "+i);
		aservice.updateAdvertise(i, a);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@GetMapping("/user/{uId}")
	public ResponseEntity<?> getAdvertiseByUser(@PathVariable int uId)
	{
		System.out.println("getting all adds of user "+uId);
		List<Advertise> allAdds = aservice.getAddPostedByUser(uId);
		if (allAdds.size() == 0) 
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Advertise>>(allAdds, HttpStatus.OK);
	}
	
	@GetMapping("/{addId}")
	public ResponseEntity<?> getAdvertiseDetails(@PathVariable long addId)
	{
		System.out.println("getting ad details for- "+addId);
		Advertise a = aservice.getAdvertiseById(addId);
		if (a == null) 
		{
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Advertise>(a,HttpStatus.OK);
	}
	
	
	
	@GetMapping("/category/{categ}")
	public ResponseEntity<?> getAdvertiseByCategory(@PathVariable int categ)
	{
		String cat = null;
		switch(categ) {
		case 1: cat="Venue";
		        break;
		case 2: cat="Photography" ;
		        break;
		case 3: cat = "Catering";
		        break;
		case 4: cat = "Clothing";
		        break;
		case 5: cat = "MakeupGrooming";
		        break;
		default:
			   cat = "Gifting";
		}
		List<Advertise> allAdds = aservice.getAddByCategory(cat);
		if (allAdds.size() == 0) 
		{
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Advertise>>(allAdds, HttpStatus.OK);
	}
	
	
	//insert
	//update
	//get all advertise
}
