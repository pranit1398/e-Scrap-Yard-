package com.scrap.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.scrap.dtos.UserLoginDto;
import com.scrap.pojos.Register;
import com.scrap.services.EmailSenderService;
import com.scrap.services.RegisterService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class RegisterController
{
	@Autowired
	private RegisterService registerService;
	@Autowired 
	private EmailSenderService senderService;

//find all users 
	@GetMapping("/findalluser")
	public ResponseEntity<?> findAll()
	{
		try
		{
			List<Register> list = registerService.findAll();
			if (list.isEmpty())
				return Response.status(HttpStatus.NOT_FOUND);
			return Response.success(list);
		} catch (Exception e)
		{
			return Response.error(e.getMessage());
		}
	}

//user register
	@PostMapping("/register")
	public ResponseEntity<?> save(@RequestBody Register register)
	{
		try
		{
			Register register1 = registerService.save(register);
			if (register1 == null)
				return Response.status(HttpStatus.NOT_FOUND);
			senderService.sendEmail(register1.getEmail(), "Welcome to e-Scrapyard !", "Dear "+register1.getName()+",\n"
					+ "\n"
					+ "We are thrilled to welcome you to e-Scrapyard! You have successfully registered as a member of our website and we are excited to have you join our community.\n"
					+ "\n"
					+ "With your new account, you can now access all of the features and benefits that our website has to offer. This includes buying and selling e-Scrap at best available price.\n"
					+ "\n"
					+ "We strive to provide the best user experience for our members, so please do not hesitate to reach out to us if you have any questions or feedback. Our support team is available [list hours of availability] and can be reached through [list contact methods].\n"
					+ "\n"
					+ "Thank you for choosing to be a part of our community. We hope you enjoy your experience with us!\n"
					+ "\n"
					+ "Best regards,\n"
					+ " e-Scrapyard Team \n"
					+ "\n"
					+ "\n"
					+ "\n"
					+ "\n"
					+ "\n"
					+ "");
			return Response.success(register1);

		} catch (Exception e)
		{

			return Response.error(e.getMessage());
		}
	}

	// user login
	@PostMapping("/userLogin")
	public ResponseEntity<?> authenticateUser(@RequestBody UserLoginDto userLoginDto)
	{
		try
		{
			System.out.println(userLoginDto);
			Register register1 = registerService.authenticateUser(userLoginDto);
			
			System.out.println(register1);
			//if (register1 == null)
			if (register1 != null && register1.getPassword().equals(userLoginDto.getPassword()))
			{
				
				System.out.println("authenticateUser/if");
				return Response.success(register1);
				}
			
			System.out.println("authenticateUser/else");
			
					return Response.status(HttpStatus.NOT_FOUND);

		} catch (Exception e)
		{
			return Response.error(e.getMessage());
		}
//	public Register authenticateUser(UserLoginDto userLoginDto) {
//	    //Register register = registerDao.findByEmail(userLoginDto.getEmail());
//	    Register register1 = registerService.authenticateUser(userLoginDto);
//	    if (register1 != null && register1.getPassword().equals(userLoginDto.getPassword())) {
//	    	System.out.println("authenticateUser/if");
//	        return register1;
//	    } else  {
//	    	System.out.println("authenticateUser/else");
//	    	return null;
//	    }
	}



	// admin can delete a user
	@DeleteMapping("/user/{id}")
	public ResponseEntity<?> deleteById(@PathVariable int id)
	{
		try
		{
			int noOfRowsDeleted = registerService.deleteById(id);
			if (noOfRowsDeleted == 0)
				return Response.status(HttpStatus.NOT_FOUND);
			return Response.success("no. of rows deleted is " + noOfRowsDeleted);
		} catch (Exception e)
		{
			return Response.error(e.getMessage());
		}
	}

	// user can edit his profile by id
	@PutMapping("/updateUser/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Register register)
	{
		try
		{
			register.setUserId(id);
			Register register1 = registerService.save(register);
			if (register1 == null)
				return Response.status(HttpStatus.NOT_FOUND);
			return Response.success(register1);

		} catch (Exception e)
		{
			return Response.error(e.getMessage());
		}

	}

	// when user will click on forget pw ,email id will be checked in th DB table
	@GetMapping("/user/forgetPwd")
	public ResponseEntity<?> forgetPassword(@RequestBody String email)
	{
		try
		{
			Register register = registerService.findByEmail(email);
			if (register == null)
				return Response.status(HttpStatus.NOT_FOUND);
			return Response.success(register);
		} catch (Exception e)
		{
			return Response.error(e.getMessage());
		}
	}

	// set new pwd for a user
	@PutMapping("/user/setPwd")
	public ResponseEntity<?> update(@RequestBody Register register)
	{
		register.setEmail(register.getEmail());
		register.setPassword(register.getPassword());
		Register register1 = registerService.savePw(register);
		if (register1 == null)
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success(register1);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> exceptionHandler(Exception e)
	{
		System.out.println("Congrats...Exception found....!!!");
		return Response.error(e.getMessage());
	}

}
