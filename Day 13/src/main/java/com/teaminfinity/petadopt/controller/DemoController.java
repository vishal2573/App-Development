package com.teaminfinity.petadopt.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
public class DemoController {
@GetMapping()
public ResponseEntity<String> sayHello(){
	System.out.println("ello");
	return ResponseEntity.ok("Please Work");
}
}
