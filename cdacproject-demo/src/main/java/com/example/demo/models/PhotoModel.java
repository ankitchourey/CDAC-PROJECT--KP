package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="photo")
public class PhotoModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long photo_id;

	@ManyToOne
	@JoinColumn(name = "adv_id")
	@JsonIgnore
	private Advertise advertise;
	
	//image bytes can have large lengths so we specify a value
    //which is more than the default length for picByte column
	@Lob
	private byte[] image;
	
	public PhotoModel() {	}
	
	

	public PhotoModel(byte[] image) {
		super();
		this.image = image;
	}



	public Long getPhoto_id() {
		return photo_id;
	}

	public void setPhoto_id(Long photo_id) {
		this.photo_id = photo_id;
	}

	public Advertise getAdvertise() {
		return advertise;
	}

	public void setAdvertise(Advertise advertise) {
		this.advertise = advertise;
	}
	
	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}
	


}
