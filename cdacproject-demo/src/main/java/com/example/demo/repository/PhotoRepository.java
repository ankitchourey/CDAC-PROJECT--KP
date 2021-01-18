package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.PhotoModel;

public interface PhotoRepository extends JpaRepository<PhotoModel, Long> {

}
