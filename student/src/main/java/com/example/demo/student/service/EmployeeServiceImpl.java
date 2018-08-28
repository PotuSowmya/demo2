/**
 * 
 */
package com.example.demo.student.service;

import java.util.List;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.student.Employee;
import com.example.demo.student.dao.EmployeeDAO;

/**
 * @author sowmya 17-Jul-2018
 *
 */
@Transactional(readOnly = true)
@Service
public class EmployeeServiceImpl implements EmployeeService {
	private static final Logger log = LoggerFactory.getLogger(EmployeeServiceImpl.class);

	@Autowired
	EmployeeDAO employeeDAO;

	@Transactional(readOnly = false)
	@Override
	public Employee create(Employee employee) {
		log.debug("create()..............");

		/*String id = UUID.randomUUID().toString();

		employee.setId(id);*/

		return employeeDAO.create(employee);
	}

	@Transactional(readOnly = false)
	@Override
	public Employee update(Employee employee) throws Exception {
		log.debug("update()..............");
		
		String id = employee.getId();

		if (id == null)
			throw new Exception("update failed");

		return employeeDAO.update(employee);
	}

	@Override
	public List<Employee> list() {
		log.debug("list()..........");
		
		return employeeDAO.list();
	}

	@Override
	public Employee get(String id) {
		// TODO Auto-generated method stub
		return employeeDAO.get(id);
	}

}
