package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Advertise;

@Repository
public interface AdvertiseRepository extends JpaRepository<Advertise, Long> {
	
	@Query("from Advertise where category = :x")
	List<Advertise> getAddByCategory(@Param("x") String category); 
	
	@Query("from Advertise a WHERE a.user.id=:uid")
	List<Advertise> getAddByUser(@Param("uid") long uid);
}
