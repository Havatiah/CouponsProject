package com.gabriel.coupons.facades;

import java.util.Collection;

import com.gabriel.coupons.beans.Company;
import com.gabriel.coupons.beans.Customer;
import com.gabriel.coupons.dao.CompanyDao;
import com.gabriel.coupons.dao.CustomerDao;
import com.gabriel.coupons.dao.ICompanyDao;
import com.gabriel.coupons.dao.ICustomerDao;
import com.gabriel.coupons.enums.ErrorType;
import com.gabriel.coupons.exceptions.CouponSystemException;

public class AdminFacade implements IClientFacade {
	private ICompanyDao companyDao = new CompanyDao();
	private ICustomerDao customerDao = new CustomerDao();

	public AdminFacade() {
	}

	public void createCompany(Company company) throws CouponSystemException {
		if (companyDao.doesCompanyNameExist(company.getName())) {
			throw new CouponSystemException(ErrorType.NAME_ALREADY_EXISTS,
					"Company name already exists, chose another name");
		}
		companyDao.createCompany(company);
	}

	public void createCustomer(Customer customer) throws CouponSystemException {
		if (customerDao.doesCustomerNameExist(customer.getName())) {
			throw new CouponSystemException(ErrorType.NAME_ALREADY_EXISTS,
					"Customer name already exists, chose another one");
		}
		customerDao.createCustomer(customer);
	}

	public void updateCustomer(Customer customer) throws CouponSystemException {
		// Define a variable which contains the existing customer in the DB according to
		// chosen customer id
		Customer customerInDb = customerDao.readCustomer(customer.getId());
		// compare both names
		if (!customer.getName().equals(customerInDb.getName())) {
			throw new CouponSystemException(ErrorType.NAME_IS_IRREPLACEABLE, "You cannot change a customer's name");
		}
		customerDao.updateCustomer(customer);
	}

	public void updateCompany(Company company) throws CouponSystemException {
		Company companyInDb = companyDao.readCompany(company.getId());
		if (!company.getName().equals(companyInDb.getName())) {
			throw new CouponSystemException(ErrorType.NAME_ALREADY_EXISTS, "You cannot change a company's name");
		}
		companyDao.updateCompany(company);
	}

	public Collection<Company> readAllCompanies() throws CouponSystemException {
		if (companyDao.readAllCompanies().isEmpty())
			throw new CouponSystemException(ErrorType.NOT_AVAILABLE, "there are no companies");
		return companyDao.readAllCompanies();
	}

	public Company readCompany(long companyId) throws CouponSystemException {
		return companyDao.readCompany(companyId);
	}

	public Collection<Customer> readAllCustomers() throws CouponSystemException {
		if (customerDao.readAllCustomers().isEmpty()) {
			throw new CouponSystemException(ErrorType.NOT_AVAILABLE, "there are no customers");
		}

		return customerDao.readAllCustomers();
	}

	public Customer readCustomer(long customerId) throws CouponSystemException {
		return customerDao.readCustomer(customerId);
	}

	public boolean login(String username, String password) {
		return (username.equals("admin") && password.equals("1234"));

	}

	public void deleteCompany(long companyId) throws CouponSystemException {
		companyDao.deleteCompanyCouponsAndPurchasedCoupons(companyId);
		companyDao.deleteCompany(companyId);
	}

	public void deleteCustomer(long customerId) throws CouponSystemException {
		customerDao.deleteCustomerCoupons(customerId);
		customerDao.deleteCustomer(customerId);

	}
}
