package com.scrap.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.scrap.pojos.Admin;

public interface AdminDao extends JpaRepository<Admin, String>
{
	@Query(value="SELECT * FROM admin  WHERE email = ?",nativeQuery = true)
	Admin findByEmail(String email);
	
}
