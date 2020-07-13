package com.scw.uiexample.exampleserver.application.controller;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.scw.uiexample.exampleserver.application.data.Example1;

@RestController
public class Controller {

	private final Logger logger;
	private Example1 example1;

	@Autowired
	public Controller( final Logger logger ) {
		this.logger = logger;
	}

	@EventListener(ApplicationReadyEvent.class)
	public void ingestEnvironmentsOnStartup() {
		System.out.println( "READY" );
	}

	@GetMapping( value = "/test" )
	public Example1 getExample1() {
		return example1;
	}

	@PostMapping( value = "/test" )
	public Boolean setExample1( @RequestBody final Example1 example1 ) {
		this.example1 = example1;
		return true;
	}

}