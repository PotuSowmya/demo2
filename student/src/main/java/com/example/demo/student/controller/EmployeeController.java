/**
 * 
 */
package com.example.demo.student.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.student.Employee;
import com.example.demo.student.ResponseJson;
import com.example.demo.student.service.EmployeeService;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * @author sowmya 17-Jul-2018
 *
 */

@RestController
@RequestMapping(value = "/api/student")
public class EmployeeController {
	private static final Logger log = LoggerFactory.getLogger(EmployeeController.class);

	@Autowired
	EmployeeService employeeService;

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public ResponseEntity<ResponseJson> create(@RequestBody Object jsonData) {
		log.debug("create()....................");

		ResponseJson responseJson = new ResponseJson();

		try {

			responseJson.setStatusCode(400);
			responseJson.setResult(null);
			responseJson.setStatus("fail");

			ObjectMapper om = new ObjectMapper();
			String json = om.writeValueAsString(jsonData);

			Employee employee = om.readValue(json, Employee.class);

			employee = employeeService.create(employee);

			if (employee == null) {
				responseJson.setShowMessage("create Failed");
				return new ResponseEntity<>(responseJson, HttpStatus.OK);

			}

			responseJson.setStatusCode(200);
			responseJson.setStatus("success");
			responseJson.setShowMessage("create Success");
			responseJson.setResult(employee);
			return new ResponseEntity<>(responseJson, HttpStatus.OK);

		} catch (Exception re) {
			log.error("create()....................RuntimeException:" + re.getMessage());
			re.printStackTrace();
			responseJson.setShowMessage(re.getMessage());
			return new ResponseEntity<>(responseJson, HttpStatus.OK);
		}
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public ResponseEntity<ResponseJson> update(@RequestBody Object jsonData) {
		log.debug("create()....................");

		ResponseJson responseJson = new ResponseJson();

		try {

			responseJson.setStatusCode(400);
			responseJson.setResult(null);
			responseJson.setStatus("fail");

			ObjectMapper om = new ObjectMapper();
			String json = om.writeValueAsString(jsonData);

			Employee employee = om.readValue(json, Employee.class);

			employee = employeeService.update(employee);

			if (employee == null) {
				responseJson.setShowMessage("update Failed");
				return new ResponseEntity<>(responseJson, HttpStatus.OK);

			}

			responseJson.setStatusCode(200);
			responseJson.setStatus("success");
			responseJson.setShowMessage("update Success");
			responseJson.setResult(employee);
			return new ResponseEntity<>(responseJson, HttpStatus.OK);

		} catch (Exception re) {
			log.error("update()....................RuntimeException:" + re.getMessage());
			re.printStackTrace();
			responseJson.setShowMessage(re.getMessage());
			return new ResponseEntity<>(responseJson, HttpStatus.OK);
		} 
	}

	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public ResponseEntity<ResponseJson> update() {
		log.debug("create()....................");

		ResponseJson responseJson = new ResponseJson();

		try {

			responseJson.setStatusCode(400);
			responseJson.setResult(null);
			responseJson.setStatus("fail");

			List<Employee> employee = employeeService.list();
			

			if (employee == null) {
				responseJson.setShowMessage("update Failed");
				return new ResponseEntity<>(responseJson, HttpStatus.OK);

			}
          
			responseJson.setStatusCode(200);
			responseJson.setStatus("success");
			responseJson.setShowMessage("list Success");
			responseJson.setResult(employee);
			return new ResponseEntity<>(responseJson, HttpStatus.OK);

		
		} catch (Exception e) {
			log.error("list()....................exception:" + e.getMessage());
			e.printStackTrace();
			responseJson.setShowMessage("get failed");
			return new ResponseEntity<>(responseJson, HttpStatus.OK);
		}
	}
	
	@RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
	public ResponseEntity<ResponseJson> get(@PathVariable String id) {
		log.debug("get()....................");

		ResponseJson responseJson = new ResponseJson();

		try {

			responseJson.setStatusCode(400);
			responseJson.setResult(null);
			responseJson.setStatus("fail");

			Employee employee = employeeService.get(id);

			if (employee == null) {
				responseJson.setShowMessage("get Failed");
				return new ResponseEntity<>(responseJson, HttpStatus.OK);

			}

			responseJson.setStatusCode(200);
			responseJson.setStatus("success");
			responseJson.setShowMessage("list Success");
			responseJson.setResult(employee);
			return new ResponseEntity<>(responseJson, HttpStatus.OK);

		
		} catch (Exception e) {
			log.error("list()....................exception:" + e.getMessage());
			e.printStackTrace();
			responseJson.setShowMessage("get failed");
			return new ResponseEntity<>(responseJson, HttpStatus.OK);
		}
	}

}
