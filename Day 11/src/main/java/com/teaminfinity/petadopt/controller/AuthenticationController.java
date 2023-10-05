package com.teaminfinity.petadopt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teaminfinity.petadopt.config.AuthenticationResponse;
import com.teaminfinity.petadopt.dto.AddPetOwnerDTO;
import com.teaminfinity.petadopt.dto.AddUserDTO;
import com.teaminfinity.petadopt.dto.AuthenticationDTO;
import com.teaminfinity.petadopt.service.AuthenticationService;
import com.teaminfinity.petadopt.service.PetOwnerService;

import ch.qos.logback.classic.Logger;
import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {
	@Autowired
	private AuthenticationService service;

	@Autowired
	private final PetOwnerService petOwnerService;
	
	@PostMapping("/register/user")
	public ResponseEntity<AuthenticationResponse> registerUser(@RequestBody AddUserDTO request) {
		return ResponseEntity.ok(service.register(request));
	}

	@PostMapping("/authenticate/user")
	public ResponseEntity<AuthenticationResponse> authenticateUser(@RequestBody AuthenticationDTO request)
			throws Exception {
		return ResponseEntity.ok(service.authenticate(request));
	}
	
    @PostMapping("/register/petowner")
	public ResponseEntity<AuthenticationResponse> registerPetOwner(@RequestBody AddPetOwnerDTO addPetOwnerDTO) {
		return ResponseEntity.ok(petOwnerService.addPetOwner(addPetOwnerDTO));
	}
    
    @PostMapping("/authenticate/petowner")
	public ResponseEntity<AuthenticationResponse> authenticatePetOwner(@RequestBody AuthenticationDTO request)
			throws Exception {
		return ResponseEntity.ok(petOwnerService.authenticate(request));
	}
}
