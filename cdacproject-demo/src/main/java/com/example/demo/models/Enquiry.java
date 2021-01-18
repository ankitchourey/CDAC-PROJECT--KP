package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Enquiry {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long enq_id;
	
	@NotBlank
	@Size(max = 40)
	private String name;

	@NotBlank
	@Size(max = 10)
	private String mobileno;
	
	@NotBlank
	@Size(max = 50)
	@Email
	private String email;
	
	@ManyToOne
	@JoinColumn(name = "id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "adv_id")
	private Advertise advertise;
	

	public Enquiry() {
		
	}

	public Long getEnq_id() {
		return enq_id;
	}

	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setEnq_id(Long enq_id) {
		this.enq_id = enq_id;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Advertise getAdvertise() {
		return advertise;
	}


	public void setAdvertise(Advertise advertise) {
		this.advertise = advertise;
	}

	@Override
	public String toString() {
		return "Enquiry [enq_id=" + enq_id + ", name=" + name + ", mobileno=" + mobileno + ", email=" + email
				+ ", user=" + user + ", advertise=" + advertise + "]";
	}
	
	
	
}
