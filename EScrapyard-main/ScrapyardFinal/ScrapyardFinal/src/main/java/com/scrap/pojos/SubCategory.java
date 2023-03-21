package com.scrap.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sub_category")
public class SubCategory
{
	@Id
	@Column(name = "subcat_id", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int subcatId;
	@Column(name = "category")
	private String category;
	@Column(name = "user_id")
	private int userId;
	@Column
	private String subcategory;
	@Column
	private String description;
	@Column
	private int qty;
	@Column
	private double rate;

	public SubCategory()
	{
		// TODO Auto-generated constructor stub
	}

	public SubCategory(int subcatId, String category, int userId, String subcategory, String description, int qty,
			double rate)
	{
		super();
		this.subcatId = subcatId;
		this.category = category;
		this.userId = userId;
		this.subcategory = subcategory;
		this.description = description;
		this.qty = qty;
		this.rate = rate;
	}

	public int getSubcatId()
	{
		return subcatId;
	}

	public void setSubcatId(int subcatId)
	{
		this.subcatId = subcatId;
	}

	public String getCategory()
	{
		return category;
	}

	public void setCategory(String category)
	{
		this.category = category;
	}

	public int getUserId()
	{
		return userId;
	}

	public void setUserId(int userId)
	{
		this.userId = userId;
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

	public int getQty()
	{
		return qty;
	}

	public void setQty(int qty)
	{
		this.qty = qty;
	}

	public double getRate()
	{
		return rate;
	}

	public void setRate(double rate)
	{
		this.rate = rate;
	}

	@Override
	public String toString()
	{
		return "SubCategory [subcatId=" + subcatId + ", category=" + category + ", userId=" + userId + ", subcategory="
				+ subcategory + ", description=" + description + ", qty=" + qty + ", rate=" + rate + "]";
	}

}
