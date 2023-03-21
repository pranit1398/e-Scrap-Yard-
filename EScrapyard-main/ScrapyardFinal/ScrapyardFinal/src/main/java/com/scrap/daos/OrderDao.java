package com.scrap.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scrap.pojos.Order;

public interface OrderDao extends JpaRepository<Order, Integer>
{

}
