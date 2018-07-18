/**
 * 
 */
package com.example.demo.student.dao;

import java.util.List;

import com.example.demo.student.Employee;

/**
 * @author sowmya 17-Jul-2018
 *
 */
public interface EmployeeDAO {
 
	public Employee create(Employee employee);
	
	public Employee update(Employee employee);
	
	public List<Employee> list();
}
