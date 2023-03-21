
  package com.scrap.controller;
 
  import java.util.List;

import org.springframework.beans.factory.annotation.Autowired; import
  org.springframework.http.HttpStatus; import
 org.springframework.http.ResponseEntity; import
 org.springframework.web.bind.annotation.CrossOrigin; import
  org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import
 org.springframework.web.bind.annotation.PutMapping; import
  org.springframework.web.bind.annotation.RequestBody; import
  org.springframework.web.bind.annotation.RequestMapping; import
  org.springframework.web.bind.annotation.RestController;
  
  import com.scrap.pojos.Stock; import com.scrap.services.StockService;
  
 
  
  @RestController
  @CrossOrigin(origins = "http://localhost:3000")
 public class StockController {
 
  @Autowired private StockService stockService;
//seller add his personal stock.
	@PostMapping("/addstock")
	public ResponseEntity<?> save(@RequestBody Stock stock)
	{
		try
		{
			
			Stock stock1 = stockService.save(stock);
			if (stock1 == null)
				return Response.status(HttpStatus.NOT_FOUND);

			return Response.success(stock1);

		} catch (Exception e)
		{

			return Response.error(e.getMessage());
		}
	}
	//view stock
	@PutMapping("/getStock/{id}")
	public ResponseEntity<?> getStock(@PathVariable("id") int userId)
	{
		List<Stock> list = stockService.getStock(userId);
		if (list == null)
			return Response.status(HttpStatus.NOT_FOUND);
		return Response.success(list);

	}
	
  

} 
 

