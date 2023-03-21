package com.scrap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.transaction.annotation.Transactional;

import com.scrap.services.EmailSenderService;

@Transactional
@SpringBootApplication
public class ScarpYardApplication
{
@Autowired 
private EmailSenderService senderService;
	public static void main(String[] args)
	{
		SpringApplication.run(ScarpYardApplication.class, args);
	}

//	@EventListener(ApplicationReadyEvent.class)
//	public void sendMail() {
//		
//		senderService.sendEmail("pjvidhate@gmail.com", "Project", "Hello cdac");
//	}
}
