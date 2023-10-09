package com.teaminfinity.petadopt.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.teaminfinity.petadopt.config.AuthenticationResponse;
import com.teaminfinity.petadopt.dto.AddPetOwnerDTO;
import com.teaminfinity.petadopt.dto.AuthenticationDTO;
import com.teaminfinity.petadopt.entity.PetOwner;
import com.teaminfinity.petadopt.repository.PetOwnerRepository;
import com.teaminfinity.petadopt.util.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PetOwnerService {

	private final PetOwnerRepository petOwnerRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;

	public AuthenticationResponse addPetOwner(AddPetOwnerDTO addPetOwnerDTO) {
		PetOwner petOwner = PetOwner.builder().username(addPetOwnerDTO.getUsername())
				.password(passwordEncoder.encode(addPetOwnerDTO.getPassword())).fullname(addPetOwnerDTO.getFullname())
				.email(addPetOwnerDTO.getEmail()).phno(addPetOwnerDTO.getPhno()).address(addPetOwnerDTO.getAddress())
				.ownertype(addPetOwnerDTO.getOwnertype()).build();

		petOwnerRepository.save(petOwner);

		var jwtToken = jwtService.generateToken(petOwner);

		return AuthenticationResponse.builder().token(jwtToken).build();
	}

	public AuthenticationResponse authenticate(AuthenticationDTO request) {

		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		System.out.println("apply");

		var petOwner = petOwnerRepository.findByUsername(request.getUsername()).orElseThrow();

		var jwtToken = jwtService.generateToken(petOwner);

		return AuthenticationResponse.builder().token(jwtToken).build();

	}
}
