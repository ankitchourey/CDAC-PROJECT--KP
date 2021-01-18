package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Enquiry;

@Repository
public interface EnquiryRepository extends JpaRepository<Enquiry, Long> {

	@Query("from Enquiry where adv_id = :id")
	List<Enquiry> getEnquiries(@Param("id") long aid);

}
