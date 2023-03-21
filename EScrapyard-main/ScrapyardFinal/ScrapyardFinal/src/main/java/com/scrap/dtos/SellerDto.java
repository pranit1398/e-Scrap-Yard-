package com.scrap.dtos;

import org.springframework.stereotype.Component;

@Component
public class SellerDto
{
	private String category;
	private String subCategory;
	private double rate;

	public SellerDto()
	{
		// TODO Auto-generated constructor stub
	}

	public SellerDto(String category, String subCategory, double rate)
	{
		super();
		this.category = category;
		this.subCategory = subCategory;
		this.rate = rate;
	}

	public String getCategory()
	{
		return category;
	}

	public void setCategory(String category)
	{
		this.category = category;
	}

	public String getSubCategory()
	{
		return subCategory;
	}

	public void setSubCategory(String subCategory)
	{
		this.subCategory = subCategory;
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
		return "SellerDto [category=" + category + ", subCategory=" + subCategory + ", rate=" + rate + "]";
	}

}