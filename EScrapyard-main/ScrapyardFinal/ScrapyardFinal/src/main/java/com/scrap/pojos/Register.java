package com.scrap.pojos;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "register")
public class Register
{

	@Id
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	@Column
	private String name;

	@Column(name = "contact_no")
	private String contactNo;
	@Column
	private String email;
	@Column
	private String password;
	@Column
	private String state;
	@Column
	private String city;
	@Column
	private String zipcode;
	@Column
	private String address;

	@JsonIgnore
	@JsonManagedReference
	@OneToMany(mappedBy = "register")
	
	private List<Order> ordersList;

	@Column
	private String role;

	public Register()
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public Register(int userId, String name, String contactNo, String email, String password, String state, String city,
			String zipcode, String address, String role)
	{
		this.userId = userId;
		this.name = name;
		this.contactNo = contactNo;
		this.email = email;
		this.password = password;
		this.state = state;
		this.city = city;
		this.zipcode = zipcode;
		this.address = address;
		this.role = role;
	}

	public int getUserId()
	{
		return userId;
	}

	public void setUserId(int userId)
	{
		this.userId = userId;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getContactNo()
	{
		return contactNo;
	}

	public void setContactNo(String contactNo)
	{
		this.contactNo = contactNo;
	}

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

	public String getState()
	{
		return state;
	}

	public void setState(String state)
	{
		this.state = state;
	}

	public String getCity()
	{
		return city;
	}

	public void setCity(String city)
	{
		this.city = city;
	}

	public String getZipcode()
	{
		return zipcode;
	}

	public void setZipcode(String zipcode)
	{
		this.zipcode = zipcode;
	}

	public String getAddress()
	{
		return address;
	}

	public void setAddress(String address)
	{
		this.address = address;
	}

	public String getRole()
	{
		return role;
	}

	public void setRole(String role)
	{
		this.role = role;
	}

	public List<Order> getOrdersList()
	{
		return ordersList;
	}

	public void setOrdersList(List<Order> ordersList)
	{
		this.ordersList = ordersList;
	}

	@Override
	public String toString()
	{
		return "Register [userId=" + userId + ", name=" + name + ", ContactNo=" + contactNo + ", email=" + email
				+ ", password=" + password + ", state=" + state + ", city=" + city + ", zipcode=" + zipcode
				+ ", address=" + address + ", role=" + role + "]";
	}

}
