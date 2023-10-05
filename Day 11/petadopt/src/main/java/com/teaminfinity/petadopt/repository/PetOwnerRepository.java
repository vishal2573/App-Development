package com.teaminfinity.petadopt.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teaminfinity.petadopt.entity.PetOwner;


public interface PetOwnerRepository extends JpaRepository<PetOwner, Integer> {
	Optional<PetOwner> findByUsername(String email);
}
