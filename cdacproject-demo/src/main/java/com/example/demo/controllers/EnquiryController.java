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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Enquiry;
import com.example.demo.services.EnquiryService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/enquiry")
public class EnquiryController {
	@Autowired
	EnquiryService eservice;
	
	@PostMapping("/{uid}/{aid}")
	public ResponseEntity<?> insertEnquiry(@RequestBody Enquiry enquiry,@PathVariable int uid,@PathVariable int aid)
	{
		
		System.out.println("adding enquiry to db...");
		//System.out.println(enquiry.=+" "+report.getReportId());
		Enquiry eq = eservice.addEnquiry(uid, aid, enquiry);
		return new ResponseEntity<Enquiry>(eq,HttpStatus.OK);
	}
	
	@DeleteMapping("delete/{uid}/{aid}/{eid}")
	public ResponseEntity<?> deleteEnquiry(@PathVariable int uid,@PathVariable int eid,@PathVariable int aid)
	{
		System.out.println("deleting enquiry from database");
		eservice.deleteEnquiry(uid, aid, eid);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@GetMapping("/{aid}")
	public ResponseEntity<?> getEnquiry(@PathVariable int aid)
	{
		
		System.out.println("adding Enquiry to db...");
		List<Enquiry> eList =eservice.getEnquiry(aid);
		return new ResponseEntity<List<Enquiry>>(eList,HttpStatus.OK);
	}
	
}
