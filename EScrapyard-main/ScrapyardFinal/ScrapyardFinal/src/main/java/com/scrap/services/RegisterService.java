package com.scrap.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.scrap.daos.RegisterDao;
import com.scrap.dtos.UserLoginDto;
import com.scrap.pojos.Register;

@Transactional
@Service
public class RegisterService
{

	@Autowired
	private RegisterDao registerDao;

	// get all users
	public List<Register> findAll()
	{
		List<Register> list = registerDao.findAll();

		return list;
	}

	/*
	 * // get all industrialist public List<Register> findAll() {
	 * 
	 * List<Register> i = null; List<Register> list = registerDao.findAll(); for
	 * (Register e : list) { if (e.getRole() == "industrialist") { i = new
	 * ArrayList<Register>(); i.add(e); } }
	 * 
	 * return i; }
	 */

	// user register
	public Register save(Register register)
	{
		return registerDao.save(register);

	}

	// admin can view list of users as per the role by selecting the particular role
	public List<Register> findByRole(String role)
	{
		List<Register> reg = registerDao.findByRole(role);
		return reg;
	}

	// admin can delete a user by id
	public int deleteById(int id)
	{
		if (registerDao.existsById(id))
		{
			registerDao.deleteById(id);
			return 1;
		}
		return 0;
	}

	// user login
	public Register authenticateUser(UserLoginDto loginUser)
	{
		Register register1 = registerDao.findByEmail(loginUser.getEmail());

		if (register1 != null)
		{
			return register1;
		}
		return null;
	}

	public Register getById(int userId)
	{
		Register register1 = registerDao.getById(userId);

		if (register1 != null)
		{
			return register1;
		}
		return register1;

	}

	public Register findByEmail(String email)
	{
		return registerDao.findByEmail(email);
	}

	public Register savePw(Register register)
	{
		return registerDao.save(register);
	}

}
