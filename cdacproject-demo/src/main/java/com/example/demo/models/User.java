package com.example.demo.models;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(	name = "users", 
		uniqueConstraints = { 
			@UniqueConstraint(columnNames = "username"),
			@UniqueConstraint(columnNames = "email") 
		})
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 40)
	private String name;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@NotBlank
	@Size(max = 20)
	private String username;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
	@Size(max = 120)
	private String password;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();
	
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "user",orphanRemoval = true)
	@JsonIgnore
	List<Advertise> addList=new ArrayList<Advertise>();
	
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "user",orphanRemoval = true)
	@JsonIgnore
	List<Enquiry> enquiryList=new ArrayList<Enquiry>();
	
	public User() {
	}

	public User(String name,String username, String email, String password) {
		this.name=name;
		this.username = username;
		this.email = email;
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}


	public List<Advertise> getAddList() {
		return addList;
	}

	public void setAddList(List<Advertise> addList) {
		this.addList = addList;
	}


	public List<Enquiry> getEnquiryList() {
		return enquiryList;
	}

	public void setEnquiryList(List<Enquiry> enquiryList) {
		this.enquiryList = enquiryList;
	}

	public void addAdvertisement(Advertise a) {
		// TODO Auto-generated method stub
		this.addList.add(a);
		a.setUser(this);
	}

	public void addEnquiry(Advertise add, Enquiry enquiry) {
		// TODO Auto-generated method stub
		System.out.println("In addEnquiry");
		this.enquiryList.add(enquiry);
		for (Enquiry eq : enquiryList) {
			System.out.println(eq);
		}
		enquiry.setAdvertise(add);
		enquiry.setUser(this);
		
	}

	public void removeEnquiry(Advertise add, Enquiry enq) {
		// TODO Auto-generated method stub
		this.enquiryList.remove(enq);
		enq.setAdvertise(add);
		enq.setUser(this);
	}
	

}
