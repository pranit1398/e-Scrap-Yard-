package com.scrap.dtos;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class OrderDto {
	@Id
	@Column(name = "orderid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	@Column(name = "user_id")
	private int userId;
	@Column(name = "order_date")
	private Date orderDate;
	@Column(name = "category")
	private String category;
	@Column(name = "subcategory")
	private String subcategory;

	@Column(name = "rate")
	private double rate;

	@Column(name = "contact_no")
	private String contactNo;
	@Column
	private String state;
	@Column
	private String city;
	@Column
	private String zipcode;
	@Column
	private String address;

	public OrderDto() {

	}

	public OrderDto(int orderId, int userId, Date orderDate, String category, String subcategory, double rate,
			String contactNo, String state, String city, String zipcode, String address) {
		super();
		this.orderId = orderId;
		this.userId = userId;
		this.orderDate = orderDate;
		this.category = category;
		this.subcategory = subcategory;
		this.rate = rate;
		this.contactNo = contactNo;
		this.state = state;
		this.city = city;
		this.zipcode = zipcode;
		this.address = address;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getSubcategory() {
		return subcategory;
	}

	public void setSubcategory(String subcategory) {
		this.subcategory = subcategory;
	}

	public double getRate() {
		return rate;
	}

	public void setRate(double rate) {
		this.rate = rate;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "OrderDto [orderId=" + orderId + ", userId=" + userId + ", orderDate=" + orderDate + ", category="
				+ category + ", subcategory=" + subcategory + ", rate=" + rate + ", contactNo=" + contactNo + ", state="
				+ state + ", city=" + city + ", zipcode=" + zipcode + ", address=" + address + "]";
	}

}
