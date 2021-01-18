package com.example.demo.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Advertise {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long adv_id;
    
	private String company;
	
	private String contact;
	 
	private Address address;
	
	private String category;
	
	@ManyToOne
	@JoinColumn(name = "id")
	public User user;

	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "advertise",orphanRemoval = true)
	public List<PhotoModel> photoList = new ArrayList<PhotoModel>();
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "advertise")
	@JsonIgnore
	public List<Enquiry> enquiries = new ArrayList<Enquiry>();
		 

	
	public Advertise() {
		
	}
	
	

	public Advertise(String company, String contact, Address address, String category) {
		super();
		this.company = company;
		this.contact = contact;
		this.address = address;
		this.category = category;
	}



	public Long getAdv_id() {
		return adv_id;
	}

	public void setAdv_id(Long adv_id) {
		this.adv_id = adv_id;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}


	public Address getAddress() {
		return address;
	}



	public void setAddress(Address address) {
		this.address = address;
	}


	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}




	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	public List<PhotoModel> getPhotoList() {
		return photoList;
	}



	public void setPhotoList(List<PhotoModel> photoList) {
		this.photoList = photoList;
	}



	public List<Enquiry> getEnquiries() {
		return enquiries;
	}



	public void setEnquiries(List<Enquiry> enquiries) {
		this.enquiries = enquiries;
	}

	
	
	
}
