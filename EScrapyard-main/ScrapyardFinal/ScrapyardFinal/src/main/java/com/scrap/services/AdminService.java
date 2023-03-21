package com.scrap.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.scrap.daos.AdminDao;
import com.scrap.pojos.Admin;

@Transactional
@Service
public class AdminService
{
	@Autowired
	private AdminDao adminDao;

	public List<Admin> findAll()
	{
		List<Admin> list = adminDao.findAll();
		return list;
	}

    public Admin authenticateAdmin(Admin admin) {
		
		Admin adm=adminDao.findByEmail(admin.getEmail());
		System.out.println(adm +" "+admin);
		if(adm != null && adm.getEmail().equals(admin.getEmail()) && adm.getPassword().equals(admin.getPassword())) {
	        System.out.println(adm);
	        return adm;
	    }
//		if(adm.getEmail().equals(admin.getEmail()) && adm.getPassword().equals(admin.getPassword()))
//		{System.out.println(adm);
//		return adm;}
		
//		if(admin.getEmail().equals(adm.getEmail()) && admin.getPassword().equals(adm.getPassword()))
//			{System.out.println(adm);
//		return adm;}
		else
		{System.out.println("admin not found");
			return null;}
	}

	public Admin findByEmail(String email)
	{
		return adminDao.findByEmail(email);
	}

	public Admin save(Admin admin)
	{
		return adminDao.save(admin);
	}

}
