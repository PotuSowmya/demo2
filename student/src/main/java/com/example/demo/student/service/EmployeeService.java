/**
 * 
 */
package com.example.demo.student.service;

import java.util.List;

import com.example.demo.student.Employee;

/**
 * @author sowmya 17-Jul-2018
 *
 */
public interface EmployeeService {
    
	public Employee create(Employee employee);
	
	public Employee update(Employee employee) throws Exception;
	
	public List<Employee> list();
}
