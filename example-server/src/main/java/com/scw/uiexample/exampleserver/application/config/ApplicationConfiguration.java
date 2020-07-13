package com.scw.uiexample.exampleserver.application.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InjectionPoint;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class ApplicationConfiguration {

	@Bean
	@Scope("prototype")
	public Logger logger(final InjectionPoint injectionPoint) {
		Class<?> clazz = null;
		if ( injectionPoint.getMethodParameter() != null ) {
			clazz = injectionPoint.getMethodParameter().getContainingClass();
		}
		else if ( injectionPoint.getField() != null ) {
			clazz = injectionPoint.getField().getDeclaringClass();
		}
		if ( clazz == null ) {
			return LoggerFactory.getILoggerFactory().getLogger( injectionPoint.getDeclaredType().getName() );
		}
		return LoggerFactory.getLogger( clazz );
	}

}
