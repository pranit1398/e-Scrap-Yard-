package com.scrap.dtos;

import org.springframework.stereotype.Component;

import com.scrap.pojos.Order;
import com.scrap.pojos.Register;

@Component
public class DtoEntityConvertor {
	public static Order toOrderEntity(OrderDto dto) {
		Register register = new Register();
		Order order = new Order();

		order.setOrderId(dto.getOrderId());

		register.setUserId(dto.getUserId());
		order.setRegister(register);
		order.setOrderDate(dto.getOrderDate());
		order.setCategory(dto.getCategory());

		order.setSubcategory(dto.getSubcategory());
		order.setAddress(dto.getAddress());
		order.setCity(dto.getCity());
		order.setContactNo(dto.getContactNo());
		order.setRate(dto.getRate());

		order.setState(dto.getState());
		order.setZipcode(dto.getZipcode());

		return order;
	}
}
