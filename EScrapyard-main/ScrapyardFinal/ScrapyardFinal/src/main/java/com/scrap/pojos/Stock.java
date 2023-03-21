package com.scrap.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stock")
public class Stock
{

	@Id
	@Column(name = "s_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sid;
	@Column(name = "userid")
	private int userId;
	@Column(name = "category")
	private String category;
	@Column(name = "subcategory")
	private String subcategory;
	@Column(name = "description")
	private String description;
	@Column(name = "price")
	private int price;
	@Column(name = "qty")
	private int qty;

	public Stock()
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public Stock(int sid, int userId, String category, String subcategory, String description, int price, int qty)
	{
		super();
		this.sid = sid;
		this.userId = userId;
		this.category = category;
		this.subcategory = subcategory;
		this.description = description;
		this.price = price;
		this.qty = qty;
	}

	public int getSid()
	{
		return sid;
	}

	public void setSid(int sid)
	{
		this.sid = sid;
	}

	public int getUserId()
	{
		return userId;
	}

	public void setUserId(int userId)
	{
		this.userId = userId;
	}

	public String getCategory()
	{
		return category;
	}

	public void setCategory(String category)
	{
		this.category = category;
	}

	public String getSubcategory()
	{
		return subcategory;
	}

	public void setSubcategory(String subcategory)
	{
		this.subcategory = subcategory;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public int getPrice()
	{
		return price;
	}

	public void setPrice(int price)
	{
		this.price = price;
	}

	public int getQty()
	{
		return qty;
	}

	public void setQty(int qty)
	{
		this.qty = qty;
	}

	@Override
	public String toString()
	{
		return "Stock [sid=" + sid + ", userId=" + userId + ", category=" + category + ", subcategory=" + subcategory
				+ ", description=" + description + ", price=" + price + ", qty=" + qty + "]";
	}

}
