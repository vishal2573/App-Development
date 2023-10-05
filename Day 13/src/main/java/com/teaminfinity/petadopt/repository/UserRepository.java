package com.teaminfinity.petadopt.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teaminfinity.petadopt.entity.User;


public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByUsername(String email);
}
