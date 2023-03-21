package com.scrap.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scrap.pojos.Stock;

public interface StockDao extends JpaRepository<Stock, Integer>
{

}
