package com.teaminfinity.petadopt.dto;

import lombok.AllArgsConstructor;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddUserDTO {
	private String username;
	private String password;
	private String fullname;
	private String email;
	private int phno;
	private String address;
}
