package com.scw.uiexample.exampleserver.application;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@ComponentScan( basePackages = { "com.scw.uiexample.exampleserver" } )
public class Application {

    public static void main(final String[] args) {
        new SpringApplicationBuilder(Application.class)
            .run(args);
    }

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {

			@Override
			public void addCorsMappings( final CorsRegistry registry ) {
				registry.addMapping( "/test" ).allowedOrigins( "*" );
			}
		};
	}
}
