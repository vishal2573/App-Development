package com.teaminfinity.petadopt.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.teaminfinity.petadopt.config.AuthenticationResponse;
import com.teaminfinity.petadopt.dto.AddUserDTO;
import com.teaminfinity.petadopt.dto.AuthenticationDTO;
import com.teaminfinity.petadopt.entity.User;
import com.teaminfinity.petadopt.entity.enumerate.Role;
import com.teaminfinity.petadopt.repository.UserRepository;
import com.teaminfinity.petadopt.util.JwtService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AuthenticationService {
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;
	private final UserRepository repo;

	public AuthenticationResponse register(AddUserDTO request) {
		var user = User.builder()
				.username(request.getUsername())
				.password(passwordEncoder.encode(request.getPassword()))
				.fullname(request.getFullname())
				.email(request.getEmail())
				.phno(request.getPhno())
				.address(request.getAddress())
				.role(Role.USER)
				.build();
				repo.save(user);
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();
	}

	public AuthenticationResponse authenticate(AuthenticationDTO request) {

		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		System.out.println("apply");
		var user = repo.findByUsername(request.getUsername()).orElseThrow();
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();

	}

}
