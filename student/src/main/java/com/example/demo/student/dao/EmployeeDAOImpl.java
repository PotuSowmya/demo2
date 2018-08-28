/**
 * 
 */
package com.example.demo.student.dao;



import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.example.demo.student.Employee;

/**
 * @author sowmya 17-Jul-2018
 *
 */

@Repository
public class EmployeeDAOImpl implements EmployeeDAO{

	private static final Logger log = LoggerFactory.getLogger(EmployeeDAOImpl.class);
	
	@Autowired
	@Qualifier("sessionFactory_DEMO")
	private SessionFactory sessionFactory;
	
	@Override
	public Employee create(Employee employee) {
        log.debug("create()..................");
		
		try {

			if (employee == null)
				return null;

			Session session = this.sessionFactory.getCurrentSession();
			
			session.save(employee);

			return employee;

		} catch (Exception e) {
			log.error("create()....................exception:" + e.getMessage());
			e.printStackTrace();
			return null;

		}
	}

	@Override
	public Employee update(Employee employee) {
		 log.debug("update()..................");
			
			try {

				if (employee == null)
					return null;

				Session session = this.sessionFactory.getCurrentSession();
				
				session.update(employee);

				return employee;

			} catch (Exception e) {
				log.error("update()....................exception:" + e.getMessage());
				e.printStackTrace();
				return null;

			}
	}

	@Override
	public List<Employee> list() {
		log.debug("update()..................");
		
		try {


			Session session = this.sessionFactory.getCurrentSession();
			
			String sql="From Employee e";
			
		    Query query=session.createQuery(sql);

			return query.list();

		} catch (Exception e) {
			log.error("update()....................exception:" + e.getMessage());
			e.printStackTrace();
			return null;

		}
	}
	
	@Override
	public Employee get(String id) {
		log.debug("get()..................");

		Session session = this.sessionFactory.getCurrentSession();

		try {

			if (id == null )
				return null;

			String sql = "From Employee OC where OC.id=:id";

			Query query = session.createQuery(sql).setParameter("id", id);

			return (Employee) query.uniqueResult();

		} catch (Exception e) {
			log.error("get()....................exception:" + e.getMessage());
			e.printStackTrace();
			throw e;
		}

	}

}
