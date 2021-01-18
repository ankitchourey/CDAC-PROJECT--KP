package com.example.demo.models;

import javax.persistence.Embeddable;

@Embeddable
public class Address {

	public String area;
	public String city;
	public String pinNo;
	
	public Address() 
	{
		
	}
	
	public Address(String area, String city, String pinNo) {
		super();
		this.area = area;
		this.city = city;
		this.pinNo = pinNo;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPinNo() {
		return pinNo;
	}

	public void setPinNo(String pinNo) {
		this.pinNo = pinNo;
	}
	
	
	
}

