/**
 * 
 */
package com.example.demo.student.service;

import java.util.List;

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
		
		String name=employee.getName();
		String country=employee.getCountry();
		
		if (name != null && country != null) {
			return employeeDAO.create(employee);
		} else {
			return null;
		}
	}
	@Transactional(readOnly = false)
	@Override
	public Employee update(Employee employee) throws Exception {
		log.debug("update()..............");
		
		String id = employee.getId();
		
		if (id == null)
			throw new Exception("id is null");

		Employee dbemployeeObj=get(id);
		
		if (dbemployeeObj == null)
			throw new Exception("dbemployeeObj is null");
		
		if(employee.getName()!=null&&!employee.getName().equalsIgnoreCase("")&&!employee.getName().equalsIgnoreCase(dbemployeeObj.getName()))
			dbemployeeObj.setName(employee.getName());
		
		if(employee.getCountry()!=null&&!employee.getCountry().equalsIgnoreCase("")&&!employee.getCountry().equalsIgnoreCase(dbemployeeObj.getCountry()))
			dbemployeeObj.setCountry(employee.getCountry());
		
		return employeeDAO.update(dbemployeeObj);
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
