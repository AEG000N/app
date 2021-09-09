package gpi.sum.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import gpi.sum.model.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {
	
	
	@PostMapping("/sum")
    public Sum sum(@RequestBody Value var) {
		return new Sum(var.getNum1(), var.getNum2(), var.getNum1() + var.getNum2());
	}
	
	/*@GetMapping("/sum")
	public Sum somma(@RequestParam("num1") String num1, @RequestParam("num2") String num2) {
		int int_num1 = Integer.parseInt(num1);
		int int_num2 = Integer.parseInt(num2);
		return new Sum(int_num1, int_num2, int_num1+int_num2);
	} GET */
	
}