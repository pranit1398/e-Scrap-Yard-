package com.scrap.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.scrap.daos.RegisterDao;
import com.scrap.daos.SubCategoryDao;
import com.scrap.dtos.SellerDto;
import com.scrap.pojos.Register;
import com.scrap.pojos.SubCategory;

@Transactional
@Service
public class SubCategoryService {
	@Autowired
	private SubCategoryDao subCategoryDao;

	@Autowired
	private StockService stockService;

	@Autowired
	private RegisterDao registerDao;

	public List<SubCategory> findAll() {
		List<SubCategory> list = subCategoryDao.findAll();
		return list;
	}

	public SubCategory save(SubCategory subCategory) {
		return subCategoryDao.save(subCategory);
	}

	public int deleteById(int id) {
		if (subCategoryDao.existsById(id)) {
			subCategoryDao.deleteById(id);
			return 1;
		}
		return 0;
	}

	public List<SubCategory> findProduct(int userId) {
		List<SubCategory> list = subCategoryDao.findAll();
		List<SubCategory> listOfSpecificUser = new ArrayList<>();

		for (SubCategory s : list) {
			if (userId == s.getUserId()) {
				listOfSpecificUser.add(s);
			}
		}

		if (listOfSpecificUser.isEmpty())
			return null;

		return listOfSpecificUser;

	}

	public SubCategory sellProduct(SubCategory subCategory) {
		SubCategory subCategoryToIncreaseQty = subCategoryDao.findById(subCategory.getSubcatId());
		int qtyToDecrese = subCategory.getQty();
		int qty = 0;
		if (subCategoryToIncreaseQty != null) {
			System.out.println("Sam");
			qty = subCategoryToIncreaseQty.getQty();
		}

		subCategory.setQty(subCategory.getQty() + qty);
		SubCategory subCat = subCategoryDao.save(subCategory);
		if (subCat != null) {
			stockService.decreaseStockQty(subCat.getUserId(), subCat.getSubcategory(), qtyToDecrese);
		}
		return subCat;
	}

	public Register findSeller(SellerDto dto) {
		List<SubCategory> list = subCategoryDao.findAll();

		int uid = 0;
		for (SubCategory s : list) {
			if (s.getCategory().equals(dto.getCategory()) && s.getSubcategory().equals(dto.getSubCategory())
					&& s.getRate() == dto.getRate()) {
				uid = s.getUserId();
				System.out.println("in for");
			}
		}
		Register result = registerDao.findById((int) uid);
		return result;
	}
}
