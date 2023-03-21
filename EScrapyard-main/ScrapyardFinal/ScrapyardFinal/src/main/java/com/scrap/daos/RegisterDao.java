package com.scrap.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scrap.pojos.Register;

public interface RegisterDao extends JpaRepository<Register, Integer>
{
	List<Register> findByRole(String role);

	Register findByEmail(String email);
	Register findById(int id);

}
