package com.scrap.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.scrap.daos.StockDao;
import com.scrap.pojos.Stock;

@Transactional
@Service
public class StockService
{
	@Autowired
	private StockDao stockDao;

// user register
	public Stock save(Stock stock)
	{
		return stockDao.save(stock);

	}

	// decrese the stock qty when sells from stock to subcat table
//	public void decreaseStockQty(int userId, String subCategory, int qtyToDecrease)
//	{
//		List<Stock> list = stockDao.findAll();
//		for (Stock s : list)
//		{
//			if (s.getUserId() == userId && s.getSubcategory().equals(subCategory))
//			{
//				Stock st = s;
//				st.setQty(st.getQty() - qtyToDecrease);
//				stockDao.save(st);
//				break;
//			}
//		}
	public void decreaseStockQty(int userId, String subCategory, int qtyToDecrease)
	{
	    List<Stock> list = stockDao.findAll();
	    for (Stock s : list)
	    {
	        if (s.getUserId() == userId && s.getSubcategory().equals(subCategory))
	        {
	            Stock st = s;
	            st.setQty(st.getQty() - qtyToDecrease);
	            
	            if (st.getQty() < 0) {
	                st.setQty(0);
	                System.out.println("Stock is not available");
	            }
	            
	            stockDao.save(st);
	            break;
	        }
	    }

	}

	
	public List<Stock> getStock(int userId)
	{
		List<Stock> list = stockDao.findAll();
		List<Stock> listOfSpecificUser = new ArrayList<>();

		for (Stock s : list)
		{
			if (userId == s.getUserId())
			{
				listOfSpecificUser.add(s);
			}
		}

		if (listOfSpecificUser.isEmpty())
			return null;

		return listOfSpecificUser;
	}
	
}
