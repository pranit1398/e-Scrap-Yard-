package com.scrap.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scrap.pojos.SubCategory;

public interface SubCategoryDao extends JpaRepository<SubCategory, Integer>
{
	SubCategory findById(int id);
}
