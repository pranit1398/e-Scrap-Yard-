package com.scrap.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin
{
	
	@Id
	@Column
	private String email;
	@Column
	private String password;

	public String getEmail()
	{
		return email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public String getPassword()
	{
		return password;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

	public Admin()
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(String email, String password)
	{
		super();
		this.email = email;
		this.password = password;
	}

	@Override
	public String toString()
	{
		return "Admin [email=" + email + ", password=" + password + "]";
	}

}
