package com.teaminfinity.petadopt.entity;

import com.teaminfinity.petadopt.entity.enumerate.OwnerType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pet_owner")
public class PetOwner {
	
	@Id
	@GeneratedValue
	private Integer id;
	private String username;
	private String password;
	private String fullname;
	private String email;
	private int phno;
	private String address;

	@Enumerated(EnumType.STRING)
	private OwnerType ownertype;
}
